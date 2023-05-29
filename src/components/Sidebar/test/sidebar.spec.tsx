import { test } from 'vitest';
import { SideBar } from '../index';
import { renderTheme } from '../../../styles/themes/render-themes';

describe('SectionHome', () => {
  test('SideBar renders correctly when logged out', () => {
    const { getByText } = renderTheme(<SideBar isLogged={false} />);

    expect(getByText('Entrar')).toBeInTheDocument();
    expect(getByText('Criar conta')).toBeInTheDocument();
  });

  test('SideBar renders correctly when logged', () => {
    const { getByText } = renderTheme(<SideBar isLogged={true} />);

    expect(getByText('Sair')).toBeInTheDocument();
  });

  test('should match to snapshot when logged', () => {
    const { container } = renderTheme(<SideBar isLogged={true} />);

    expect(container).toMatchSnapshot();
  });

  test('should match to snapshot when logged out', () => {
    const { container } = renderTheme(<SideBar isLogged={false} />);

    expect(container).toMatchSnapshot();
  });
});
