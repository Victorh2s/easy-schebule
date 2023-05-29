import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/axios';
import { isAxiosError } from 'axios';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  children: ReactNode;
}

interface SignData {
  email: string;
  password: string;
}

interface SignDataResponse {
  id: string;
  email: string;
  username: string;
  description: string | null;
  tasks: [
    {
      id: string;
      title: string;
      description: string;
      status: string;
      authorId: string;
      created_at: string;
    }
  ];
}

interface AuthContextOptions {
  user: SignDataResponse | null;
  isStatus: number;
  isError: string;
  isLoading: boolean;
  signIn: (data: SignData) => Promise<void>;
  signOut: () => Promise<void>;
  isLogged: boolean;
}

const AuthContext = createContext<AuthContextOptions>({} as AuthContextOptions);

export function signOutAxios() {
  console.log('Signing out');

  destroyCookie(undefined, 'auth.token');
  destroyCookie(undefined, 'auth.refreshTokenId');
}

export function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<SignDataResponse | null>(null);
  const [isStatus, setIsStatus] = useState(Number);
  const [isError, setIsError] = useState(String);
  const [isLoading, setIsLoading] = useState(Boolean);
  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();
  const { 'auth.token': token } = parseCookies();

  async function signIn({ email, password }: SignData) {
    try {
      setIsLoading(true);

      const response = await api.post('/login', { email, password });
      setIsStatus(response.status);
      setIsError('');

      setCookie(undefined, 'auth.token', response.data.token, {
        maxAge: 60 * 45 * 1,
        path: '/',
      });

      setCookie(
        undefined,
        'auth.refreshTokenId',
        response.data.refreshToken.id,
        {
          maxAge: response.data.refreshToken.expiresIn,
          path: '/',
        }
      );

      api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;

      const responseUser = await api.get('/user');

      setUser(responseUser.data);

      navigate('/dashboard');
      setIsLoading(false);
    } catch (error) {
      if (isAxiosError(error) && error.response && isStatus !== 204) {
        setIsError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }
  async function signOut() {
    destroyCookie(undefined, 'auth.token');
    destroyCookie(undefined, 'auth.refreshTokenId');
    navigate('/');
  }

  useEffect(() => {
    if (token) {
      api
        .get('/user')
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => {
          signOut();
        });
      setIsLogged(true);
    } else {
      setIsLogged(false);
      return navigate('/');
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isError,
        isLoading,
        isStatus,
        signIn,
        signOut,
        isLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextOptions {
  const context = useContext(AuthContext);
  return context;
}
