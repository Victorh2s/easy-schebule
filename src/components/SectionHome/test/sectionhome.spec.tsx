import { test } from 'vitest';
import { SectionHome } from '../index';
import { renderTheme } from '../../../styles/themes/render-themes';

describe('SectionHome', () => {
  test('SectionHome renders correctly', () => {
    const { getByText, getByAltText } = renderTheme(<SectionHome />);

    expect(
      getByText(
        'Sabemos como pode ser desafiador acompanhar todas as tarefas do dia a dia, tanto no trabalho quanto nas atividades pessoais. É por isso que criamos o EasySchedule: uma ferramenta intuitiva e eficiente para ajudá-lo a manter tudo sob controle.'
      )
    ).toBeInTheDocument();
    expect(getByText('Comece agora')).toBeInTheDocument();
    expect(getByAltText('img')).toBeInTheDocument();
  });

  test('should match to snapshot', () => {
    const { container } = renderTheme(<SectionHome />);

    expect(container).toMatchSnapshot();
  });
});
