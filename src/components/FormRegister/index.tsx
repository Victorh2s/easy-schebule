import { FormContainer, Form, Submit } from './styles';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../services/axios';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';

interface IntCreateUser {
  username: string;
  email: string;
  password: string;
}

const createUserFormSchema = z
  .object({
    username: z
      .string()
      .nonempty('O campo username é obrigatório')
      .min(3, 'O username precisa ter no mínimo 3 caracteres')
      .regex(/^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*$/, 'Nome do usuário inválido'),
    email: z
      .string()
      .nonempty('O campo e-mail é obrigatório')
      .email('Formato de e-mail inválido'),
    checkemail: z
      .string()
      .nonempty('O campo confirmar e-mail é obrigatório')
      .email('Formato de e-mail inválido'),
    password: z
      .string()
      .nonempty('O campo senha é obrigatório')
      .min(6, 'A senha precisa ter no mínimo 6 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        'A senha fornecida não é forte o suficiente'
      ),
  })
  .refine(
    (data) => {
      return data.email === data.checkemail;
    },
    {
      message: 'Os campos de E-mail não corresponde.',
      path: ['checkemail'],
    }
  );

export type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export function FormRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [userDataStatus, setUserDataStatus] = useState(Number);
  const [userError, setUserError] = useState<string | null>(null);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const { 'auth.token': token } = parseCookies();

  useEffect(() => {
    if (token) {
      return navigate('/dashboard');
    }
  }, []);

  useEffect(() => {
    if (userDataStatus === 201) {
      setUserError('');
      setSuccess(
        'Conta criada com sucesso, aguarde para ser redirecionado para o login'
      );
      setTimeout(() => {
        navigate('/login');
        setSuccess('');
      }, 2500);
    }
  }, [userDataStatus]);

  function createUser(data: IntCreateUser) {
    setIsLoading(true);
    api
      .post('/user', data)
      .then((response) => {
        setUserDataStatus(response.status);
        setIsLoading(false);
      })
      .catch((error) => {
        if (isAxiosError(error) && error.response && userDataStatus !== 204) {
          setUserError(error.response.data.message);
        }
        setIsLoading(false);
      });
  }

  async function handleCreateNewUser(data: CreateUserFormData) {
    createUser(data);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(handleCreateNewUser)}>
        <div className="form-info">
          <Link to={'/'}>
            <h1>EasySchebule</h1>
          </Link>
          <span>
            Já possui uma conta?{' '}
            <Link to={'/login'}>
              <strong> Clique aqui</strong>
            </Link>{' '}
            para acessá-la
          </span>
        </div>

        <div className="form-inputs">
          {success && <span className="status-success">{success}</span>}
          {userError && <span className="status-error">{userError}</span>}
          <div>
            <label htmlFor="username">Username</label>
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <input type="text" id="username" {...register('username')} />

          <div>
            <label htmlFor="email">E-mail</label>
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <input type="email" id="email" {...register('email')} />

          <div>
            <label htmlFor="checkemail">Confirmar E-mail</label>
            {errors.checkemail && <span>{errors.checkemail.message}</span>}
          </div>
          <input type="email" id="checkemail" {...register('checkemail')} />

          <div>
            <label htmlFor="password">Senha</label>
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <input type="password" id="password" {...register('password')} />

          <Submit type="submit" value="Criar conta" disabled={isLoading} />
        </div>
      </Form>
    </FormContainer>
  );
}
