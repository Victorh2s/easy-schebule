import { Pen, Trash } from '@phosphor-icons/react';
import { CardContainer } from './styles';

interface CardProps {
  title: string;
  openModal: () => void;
  updateTask: () => void;
  deleteTask: () => void;
}

export function Card({ title, openModal, updateTask, deleteTask }: CardProps) {
  return (
    <CardContainer>
      <h4 onClick={openModal}>{title}</h4>
      <nav>
        <Pen size={20} onClick={updateTask} aria-label="pen-icon" />
        <Trash size={20} onClick={deleteTask} aria-label="trash-icon" />
      </nav>
    </CardContainer>
  );
}
