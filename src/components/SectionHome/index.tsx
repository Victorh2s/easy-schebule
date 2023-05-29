import { HomeContainer, HomeContent } from './styles';
import imgHome from '../../assets/Complete.svg';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export function SectionHome() {
  const { isLogged } = useAuthContext();

  return (
    <HomeContainer>
      <HomeContent>
        <div>
          <h1>
            Sabemos como pode ser desafiador acompanhar todas as tarefas do dia
            a dia, tanto no trabalho quanto nas atividades pessoais. É por isso
            que criamos o EasySchedule: uma ferramenta intuitiva e eficiente
            para ajudá-lo a manter tudo sob controle.
          </h1>
          <Link to={isLogged ? '/dashboard' : '/login'}>Comece agora</Link>
        </div>
        <img src={imgHome} alt="img" aria-label="img" />
      </HomeContent>
    </HomeContainer>
  );
}
