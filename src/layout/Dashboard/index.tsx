import { useEffect, useState } from 'react';
import { api } from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import { parseCookies } from 'nookies';
import {
  DashboardContainer,
  DashboardContent,
  DashboardGrid,
  DashboardHeader,
} from './styles';
import { PlusSquare } from '@phosphor-icons/react';
import { Card } from '../../components/Card';
import { useModalContext } from '../../context/ModalContext';
import { ModalCreateTask } from '../../components/ModalCreateTask';
import { ModalViewTask } from '../../components/ModalViewTask';
import { ModalUpdateTask } from '../../components/ModalUpdateTask';
import { ModalDeleteTask } from '../../components/ModalDelete';
import { IsLoader } from '../../components/Loader';

export interface IntTask {
  id: string;
  title: string;
  description: string;
  status: string;
  authorId: string;
  created_at: string;
}

export function DashboardComponent() {
  const {
    isOpenModalCreate,
    openModalCreate,
    openModalView,
    isOpenModalView,
    isOpenModalUpdate,
    isOpenModalDelete,
    openModalDelete,
    openModalUpdate,
    isNewReloading,
  } = useModalContext();
  const [isData, setIsData] = useState<IntTask[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const pendente_len = isData.filter((task) => task.status === 'Pendente');
  const fazendo_len = isData.filter((task) => task.status === 'Fazendo');
  const feito_len = isData.filter((task) => task.status === 'Feito');
  const { 'auth.token': token } = parseCookies();

  useEffect(() => {
    setIsLoading(true);
    if (token) {
      api
        .get('/task')
        .then((response) => {
          setIsData(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      navigate('/login');
    }
  }, [isNewReloading]);

  return (
    <>
      {isOpenModalCreate && <ModalCreateTask />}
      {isOpenModalView.isOpen && <ModalViewTask />}
      {isOpenModalUpdate.isOpen && <ModalUpdateTask />}
      {isOpenModalDelete.isOpen && <ModalDeleteTask />}

      <DashboardContainer>
        <DashboardContent>
          <DashboardHeader>
            <h1>Tarefas</h1>
            <button onClick={() => openModalCreate()}>
              <PlusSquare size={25} className="AddMoreTask" />
            </button>
          </DashboardHeader>

          {isLoading ? (
            <IsLoader />
          ) : (
            <DashboardGrid>
              <div className="grid-pendente">
                <h3>Pendentes ({pendente_len.length})</h3>

                <div>
                  {isData.map((task) => {
                    if (task.status === 'Pendente') {
                      return (
                        <Card
                          key={task.id}
                          title={task.title}
                          openModal={() => openModalView(task.id)}
                          updateTask={() => openModalUpdate(task.id)}
                          deleteTask={() => openModalDelete(task.id)}
                        />
                      );
                    }
                  })}
                </div>
              </div>
              <div className="grid-andamento">
                <h3>Em andamento ({fazendo_len.length})</h3>

                <div>
                  {isData.map((task) => {
                    if (task.status === 'Fazendo') {
                      return (
                        <Card
                          key={task.id}
                          title={task.title}
                          openModal={() => openModalView(task.id)}
                          updateTask={() => openModalUpdate(task.id)}
                          deleteTask={() => openModalDelete(task.id)}
                        />
                      );
                    }
                  })}
                </div>
              </div>

              <div className="grid-finalizado">
                <h3>Finalizadas ({feito_len.length})</h3>

                <div>
                  {isData.map((task) => {
                    if (task.status === 'Feito') {
                      return (
                        <Card
                          key={task.id}
                          title={task.title}
                          openModal={() => openModalView(task.id)}
                          updateTask={() => openModalUpdate(task.id)}
                          deleteTask={() => openModalDelete(task.id)}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </DashboardGrid>
          )}
        </DashboardContent>
      </DashboardContainer>
    </>
  );
}
