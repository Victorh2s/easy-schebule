import { useModalContext } from '../../context/ModalContext';
import { ModalContent, ModalWrapper } from './styles';
import { api } from '../../services/axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ModalDeleteTask() {
  const { closeModalDelete, handleChangeReloading, isOpenModalDelete } =
    useModalContext();
  const [taskDataStatus, setTaskDataStatus] = useState(Number);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (taskDataStatus === 200) {
      toast.success('Tarefa deletada com sucesso!');
      handleChangeReloading();
      closeModalDelete(isOpenModalDelete.id);
      setTaskDataStatus(0);
    }
  }, [taskDataStatus]);

  function DeleteTask() {
    setIsLoading(true);
    api
      .delete(`/task/${isOpenModalDelete.id}`)
      .then((response) => {
        setTaskDataStatus(response.status);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Tem certeza que deseja deletar essa tarefa?</h2>
        <div>
          <button disabled={isLoading} onClick={() => DeleteTask()}>
            Deletar
          </button>
          <button onClick={() => closeModalDelete('')}>Fechar</button>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
}
