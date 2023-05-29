import { test } from 'vitest';
import { ModalViewTask } from '../index';
import { renderTheme } from '../../../styles/themes/render-themes';

describe('ModalViewTask', () => {
  test('ModalViewTask renders correctly', () => {
    const { getByText } = renderTheme(<ModalViewTask />);

    expect(getByText('Tarefa criada em')).toBeInTheDocument();
  });

  test('ModalViewTask displays task data correctly', () => {
    const { getByText } = renderTheme(<ModalViewTask />);

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText('Finalizado')).toBeInTheDocument();
  });

  test('should match to snapshot', () => {
    const { container } = renderTheme(<ModalViewTask />);

    expect(container).toMatchSnapshot();
  });
});
