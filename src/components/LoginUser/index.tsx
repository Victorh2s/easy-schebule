import { FormContainer, Form, Submit } from './styles';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthContext } from '../../context/AuthContext';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';

const createTokenUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('O campo e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z
    .string()
    .nonempty('O campo senha é obrigatório')
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'A senha fornecida não é forte o suficiente'
    ),
});

export type CreatetokenUserFormData = z.infer<typeof createTokenUserFormSchema>;

export function LoginUser() {
  const { isError, isLoading, signIn } = useAuthContext();

  const { 'auth.token': token } = parseCookies();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      return navigate('/dashboard');
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatetokenUserFormData>({
    resolver: zodResolver(createTokenUserFormSchema),
  });

  async function handleLogin({ email, password }: CreatetokenUserFormData) {
    await signIn({ email, password });
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-info">
          <Link to={'/'}>
            <h1>EasySchebule</h1>
          </Link>
          <span>
            Ainda não possui uma conta?{' '}
            <Link to={'/registro'}>
              <strong> Clique aqui</strong>
            </Link>{' '}
          </span>
        </div>

        <div className="form-inputs">
          {isError && <span className="status-error">{isError}</span>}

          <div>
            <label htmlFor="email">E-mail</label>
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <input type="email" id="email" {...register('email')} />

          <div>
            <label htmlFor="password">Senha</label>
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <input type="password" id="password" {...register('password')} />

          <Submit
            type="submit"
            value={isLoading ? 'Aguarde...' : 'Criar conta'}
            disabled={isLoading}
          />
        </div>
      </Form>
    </FormContainer>
  );
}
