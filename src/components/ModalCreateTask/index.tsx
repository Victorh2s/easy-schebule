import { useForm } from 'react-hook-form';
import { useModalContext } from '../../context/ModalContext';
import { ModalContent, ModalWrapper } from './styles';
import { isAxiosError } from 'axios';
import { api } from '../../services/axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const createNewTaskSchema = z.object({
  title: z.string().max(80, 'O título deve ter, no máximo, 80 caracteres.'),
  description: z
    .string()
    .max(600, 'A descrição deve ter, no máximo 600 caracteres.'),
  status: z.string().nonempty('Selecione uma das opções.'),
});

export type CreateTaskFormData = z.infer<typeof createNewTaskSchema>;

export function ModalCreateTask() {
  const { closeModalCreate, handleChangeReloading } = useModalContext();
  const [taskDataStatus, setTaskDataStatus] = useState(Number);
  const [isLoading, setIsLoading] = useState(false);
  const [taskError, setTaskError] = useState(String);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskFormData>({
    resolver: zodResolver(createNewTaskSchema),
  });

  useEffect(() => {
    if (taskDataStatus === 200) {
      setTaskError('');
      toast.success('Tarefa criada com sucesso!');
      handleChangeReloading();
      closeModalCreate();
      setTaskDataStatus(0);
    }
  }, [taskDataStatus]);

  async function handleCreateTask(data: CreateTaskFormData) {
    setIsLoading(true);
    api
      .post('/task', data)
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

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Criar tarefa</h2>
        {taskError && <span>{taskError}</span>}

        <form onSubmit={handleSubmit(handleCreateTask)}>
          <div>
            {errors.title && <span>{errors.title.message}</span>}

            <input
              type="text"
              placeholder="Título da tarefa"
              {...register('title')}
            />
          </div>
          <div>
            {errors.description && <span>{errors.description.message}</span>}

            <textarea
              placeholder="Descrição da tarefa"
              style={{ resize: 'none' }}
              {...register('description')}
            />
          </div>
          <div>
            {errors.status && (
              <span aria-label="error">{errors.status.message}</span>
            )}

            <select {...register('status')} aria-label="Selecione uma opção">
              <option value="" disabled selected>
                Selecione uma opção
              </option>
              <option value="Pendente">Pendente</option>
              <option value="Fazendo">Em andamento</option>
              <option value="Feito">Finalizada</option>
            </select>
          </div>

          <div>
            <button className="create-task" type="submit" disabled={isLoading}>
              {isLoading ? 'Aguarde...' : 'Criar conta'}
            </button>
          </div>
        </form>
        <button onClick={() => closeModalCreate()} className="closeButton">
          Fechar
        </button>
      </ModalContent>
    </ModalWrapper>
  );
}
