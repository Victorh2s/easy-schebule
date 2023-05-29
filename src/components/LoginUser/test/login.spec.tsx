import { describe, test, expect } from 'vitest';
import { LoginUser } from '../index';
import { renderTheme } from '../../../styles/themes/render-themes';

describe('LoginUser component', () => {
  test('renders form inputs and submits login', async () => {
    const { getByLabelText, getByText } = renderTheme(<LoginUser />);

    const emailInput = getByLabelText('E-mail');
    const passwordInput = getByLabelText('Senha');
    const submitButton = getByText('Criar conta');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('should match to snapshot', () => {
    const { container } = renderTheme(<LoginUser />);

    expect(container).toMatchSnapshot();
  });
});
