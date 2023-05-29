import { ModalCreateTask } from '../index';
import { renderTheme } from '../../../styles/themes/render-themes';

describe('ModalCreateTask', () => {
  test('renders modal with form', () => {
    const { getByText, getByPlaceholderText, getByLabelText } = renderTheme(
      <ModalCreateTask />
    );

    expect(getByText('Criar tarefa')).toBeInTheDocument();

    expect(getByPlaceholderText('Título da tarefa')).toBeInTheDocument();
    expect(getByPlaceholderText('Descrição da tarefa')).toBeInTheDocument();
    expect(getByLabelText('Selecione uma opção')).toBeInTheDocument();
  });

  test('should match to snapshot', () => {
    const { container } = renderTheme(<ModalCreateTask />);

    expect(container).toMatchSnapshot();
  });
});
