import { ReactNode, createContext, useContext, useState } from 'react';

interface ModalContextProps {
  children: ReactNode;
}

interface OpenModalContextProps {
  isOpen: boolean;
  id: string;
}

interface ModalContextData {
  openModalView(id: string): void;
  closeModalView(id: string): void;
  isOpenModalView: OpenModalContextProps;

  openModalUpdate(id: string): void;
  closeModalUpdate(id: string): void;
  isOpenModalUpdate: OpenModalContextProps;

  openModalDelete(id: string): void;
  closeModalDelete(id: string): void;
  isOpenModalDelete: OpenModalContextProps;

  openModalCreate(): void;
  closeModalCreate(): void;
  isOpenModalCreate: boolean;

  isNewReloading: number;
  handleChangeReloading: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalContextProps) {
  const [isOpenModalView, setIsOpenModalView] = useState<OpenModalContextProps>(
    { isOpen: false, id: '' }
  );
  const [isOpenModalDelete, setIsOpenModalDelete] = useState({
    isOpen: false,
    id: '',
  });
  const [isOpenModalUpdate, setIsOpenModalUpdate] =
    useState<OpenModalContextProps>({ isOpen: false, id: '' });
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

  const [isNewReloading, setIsNewReloading] = useState(0);

  const handleChangeReloading = () => {
    setIsNewReloading(isNewReloading + 1);
  };

  const openModalView = (id: string) => {
    setIsOpenModalView({ isOpen: true, id });
  };

  const closeModalView = (id: string) => {
    setIsOpenModalView({ isOpen: false, id });
  };

  const openModalUpdate = (id: string) => {
    setIsOpenModalUpdate({ isOpen: true, id });
  };

  const closeModalUpdate = (id: string) => {
    setIsOpenModalUpdate({ isOpen: false, id });
  };

  const openModalDelete = (id: string) => {
    setIsOpenModalDelete({ isOpen: true, id });
  };

  const closeModalDelete = (id: string) => {
    setIsOpenModalDelete({ isOpen: false, id });
  };

  const openModalCreate = () => {
    setIsOpenModalCreate(true);
  };

  const closeModalCreate = () => {
    setIsOpenModalCreate(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModalView,
        closeModalView,
        isOpenModalView,
        openModalUpdate,
        closeModalUpdate,
        isOpenModalUpdate,
        openModalCreate,
        closeModalCreate,
        isOpenModalCreate,
        isNewReloading,
        openModalDelete,
        closeModalDelete,
        isOpenModalDelete,
        handleChangeReloading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext(): ModalContextData {
  const context = useContext(ModalContext);
  return context;
}
