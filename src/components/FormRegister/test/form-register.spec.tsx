import { FormRegister } from '../index';
import { renderTheme } from '../../../styles/themes/render-themes';

describe('FormRegister', () => {
  test('renders form inputs and submit button', () => {
    const { getByLabelText, getByRole } = renderTheme(<FormRegister />);

    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Confirmar E-mail')).toBeInTheDocument();
    expect(getByLabelText('Senha')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Criar conta' })).toBeInTheDocument();
  });

  // test('displays error messages when form is submitted with invalid data', () => {
  //   const { getByText, getByRole } = renderTheme(<FormRegister />);

  //   fireEvent.click(getByRole('button', { name: 'Criar conta' }));

  //   expect(getByText('O campo username é obrigatório')).toBeInTheDocument();
  //   expect(getByText('O campo e-mail é obrigatório')).toBeInTheDocument();
  //   expect(
  //     getByText('O campo confirmar e-mail é obrigatório')
  //   ).toBeInTheDocument();
  //   expect(getByText('O campo senha é obrigatório')).toBeInTheDocument();
  // });

  test('should match to snapshot', () => {
    const { container } = renderTheme(<FormRegister />);

    expect(container).toMatchSnapshot();
  });
});
