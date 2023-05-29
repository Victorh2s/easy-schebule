import { ModalDeleteTask } from '../index';
import { renderTheme } from '../../../styles/themes/render-themes';

describe('ModalDeleteTask', () => {
  test('deletes task and shows success message', async () => {
    const { getByText } = renderTheme(<ModalDeleteTask />);

    expect(
      getByText('Tem certeza que deseja deletar essa tarefa?')
    ).toBeInTheDocument();
    expect(getByText('Deletar')).toBeInTheDocument();
    expect(getByText('Fechar')).toBeInTheDocument();
  });

  test('should match to snapshot', () => {
    const { container } = renderTheme(<ModalDeleteTask />);

    expect(container).toMatchSnapshot();
  });
});
