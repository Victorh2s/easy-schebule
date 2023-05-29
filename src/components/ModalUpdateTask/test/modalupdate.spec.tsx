import { ModalUpdateTask } from '../index';
import { renderTheme } from '../../../styles/themes/render-themes';

describe('ModalUpdateTask', () => {
  test('should render ModalUpdateTask', async () => {
    const { getByText } = renderTheme(<ModalUpdateTask />);

    expect(getByText('Atualizar')).toBeInTheDocument();

    expect(getByText('Selecione uma opção')).toBeInTheDocument();
  });

  test('should match to snapshot', () => {
    const { container } = renderTheme(<ModalUpdateTask />);

    expect(container).toMatchSnapshot();
  });
});
