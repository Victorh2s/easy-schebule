import { useForm } from 'react-hook-form';
import { useModalContext } from '../../context/ModalContext';
import { ModalContent, ModalWrapper } from './styles';
import { isAxiosError } from 'axios';
import { api } from '../../services/axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IntTask } from '../../layout/Dashboard';

import { formatarDataBr } from '../../utils/format-data';
import 'react-toastify/dist/ReactToastify.css';
import { IsLoader } from '../Loader';

const UpdateNewTaskSchema = z.object({
  title: z.string().max(80, 'O título deve ter, no máximo, 80 caracteres.'),
  description: z
    .string()
    .max(600, 'A descrição deve ter, no máximo 600 caracteres.'),
  status: z.string().nonempty(),
});

export type CreateTaskFormData = z.infer<typeof UpdateNewTaskSchema>;

export function ModalUpdateTask() {
  const { closeModalUpdate, handleChangeReloading, isOpenModalUpdate } =
    useModalContext();
  const [taskDataStatus, setTaskDataStatus] = useState(Number);
  const [isLoading, setIsLoading] = useState(false);
  const [taskError, setTaskError] = useState(String);
  const [isTask, setIsTask] = useState<IntTask>({
    id: '',
    title: '',
    description: '',
    status: '',
    authorId: '',
    created_at: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateTaskFormData>({
    resolver: zodResolver(UpdateNewTaskSchema),
  });

  useEffect(() => {
    if (taskDataStatus === 200) {
      setTaskError('');
      toast.success('Tarefa atualizada com sucesso!');
      handleChangeReloading();
      closeModalUpdate(isOpenModalUpdate.id);
      setTaskDataStatus(0);
    }
  }, [taskDataStatus]);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/task/${isOpenModalUpdate.id}`)
      .then((response) => {
        setIsTask(response.data);
        setValue('title', response.data.title);
        setValue('description', response.data.description);
        setValue('status', response.data.status);
        setIsLoading(false);
      })
      .catch((error) => {
        setTaskError(error);
        setIsLoading(false);
      });
  }, []);

  function handleUpdate(data: CreateTaskFormData) {
    setIsLoading(true);
    api
      .put(`/task/${isOpenModalUpdate.id}`, data)
      .then((response) => {
        setTaskDataStatus(response.status);
        setIsLoading(false);
      })
      .catch((error) => {
        if (isAxiosError(error) && error.response && taskDataStatus !== 204) {
          setTaskError(error.response.data.message);
        }
        setIsLoading(false);
      });
  }

  const dataString = isTask.created_at;
  const dataBr = formatarDataBr(dataString);
  return (
    <ModalWrapper>
      <ModalContent>
        {isLoading ? (
          <IsLoader />
        ) : (
          <>
            {taskError && <span>{taskError}</span>}

            <form onSubmit={handleSubmit(handleUpdate)}>
              <div>
                {errors.title && <span>{errors.title.message}</span>}
                <textarea
                  id="title"
                  style={{ resize: 'none' }}
                  placeholder="Título da tarefa"
                  {...register('title')}
                />
              </div>
              <div>
                {errors.description && (
                  <span>{errors.description.message}</span>
                )}

                <textarea
                  placeholder="Descrição da tarefa"
                  style={{ resize: 'none' }}
                  {...register('description')}
                />
              </div>
              <div>
                {errors.status && <span>{errors.status.message}</span>}

                <select {...register('status')}>
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Pendente">Pendente</option>
                  <option value="Fazendo">Em andamento</option>
                  <option value="Feito">Finalizada</option>
                </select>
              </div>

              <div>
                <span id="data-status">Tarefa criada em {dataBr}</span>
              </div>

              <div>
                <button
                  className="create-task"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Aguarde...' : 'Atualizar'}
                </button>
              </div>
            </form>
            <button
              onClick={() => closeModalUpdate(isOpenModalUpdate.id)}
              className="closeButton"
            >
              Fechar
            </button>
          </>
        )}
      </ModalContent>
    </ModalWrapper>
  );
}
