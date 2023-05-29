import { describe, test, expect } from 'vitest';
import { Header } from '../index';
import { renderTheme } from '../../../styles/themes/render-themes';

describe('Header component', () => {
  test('renders correctly with user menu', () => {
    const { getByText, getByLabelText } = renderTheme(
      <Header headerDashboard={true} token={true} />
    );

    expect(getByText('EasySchebule')).toBeInTheDocument();
    expect(getByLabelText('username')).toBeInTheDocument();
    expect(getByText('Sair')).toBeInTheDocument();
  });

  test('renders correctly without user menu', () => {
    const { getByText } = renderTheme(<Header headerDashboard token={false} />);

    expect(getByText('EasySchebule')).toBeInTheDocument();
    expect(getByText('Entrar')).toBeInTheDocument();
    expect(getByText('Criar conta')).toBeInTheDocument();
  });

  test('should match to snapshot', () => {
    const { container } = renderTheme(<Header headerDashboard token={false} />);

    expect(container).toMatchSnapshot();
  });
});
