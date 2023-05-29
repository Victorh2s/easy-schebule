import { useModalContext } from '../../context/ModalContext';
import { ModalContent, ModalWrapper } from './styles';
import { api } from '../../services/axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IntTask } from '../../layout/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { formatarDataBr } from '../../utils/format-data';
import { IsLoader } from '../Loader';

export function ModalViewTask() {
  const { closeModalView, handleChangeReloading, isOpenModalView } =
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

  let status;

  if (isTask.status === 'Pendente') {
    status = 'Pendente';
  } else if (isTask.status === 'Fazendo') {
    status = 'Em andamento';
  } else {
    status = 'Finalizado';
  }

  useEffect(() => {
    if (taskDataStatus === 200) {
      setTaskError('');
      toast.success('Tarefa criada com sucesso!');
      handleChangeReloading();
      closeModalView(isOpenModalView.id);
      setTaskDataStatus(0);
    }
  }, [taskDataStatus]);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/task/${isOpenModalView.id}`)
      .then((response) => {
        setIsTask(response.data), setIsLoading(false);
      })
      .catch((error) => {
        setTaskError(error);
        setIsLoading(false);
      });
  }, []);

  const dataString = isTask.created_at;
  const dataBr = formatarDataBr(dataString);
  return (
    <ModalWrapper>
      <ModalContent status={isTask.status} isLoading>
        {isLoading ? (
          <IsLoader />
        ) : (
          <>
            <h2>{isTask.title}</h2>
            <p>{isTask.description}</p>
            <strong>{status}</strong>
            <span>Tarefa criada em {dataBr}</span>
            {taskError && <span>{taskError}</span>}
            <button onClick={() => closeModalView('')} className="closeButton">
              Fechar
            </button>
          </>
        )}
      </ModalContent>
    </ModalWrapper>
  );
}
