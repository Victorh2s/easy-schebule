import { useEffect, useState } from 'react';
import { HeaderContainer, HeaderContent } from './styles';
import { List, X } from '@phosphor-icons/react';
import { useSideBarContext } from '../../context/SideBarContext';
import { Link } from 'react-router-dom';
import Avatar, { genConfig } from 'react-nice-avatar';
import { useAuthContext } from '../../context/AuthContext';

interface HeaderProps {
  headerDashboard?: boolean;
  token: boolean;
}

export function Header({ headerDashboard = false, token }: HeaderProps) {
  const [isMenu, setIsMenu] = useState(false);
  const { setSideBarState, setSideBarStateFalse, isOpen } = useSideBarContext();
  const { signOut, user } = useAuthContext();

  const config = genConfig();

  useEffect(() => {
    const handleResize = () => {
      setIsMenu(window.innerWidth <= 700);
      if (window.innerWidth > 700) {
        setSideBarStateFalse;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSideBarStateFalse]);

  if (token) {
    return (
      <HeaderContainer>
        <HeaderContent headerDashboard={headerDashboard}>
          {isMenu ? (
            <>
              {isOpen ? (
                <X onClick={() => setSideBarState()} size={32} alt="list" />
              ) : (
                <List onClick={() => setSideBarState()} size={32} alt="list" />
              )}
              <h2>EasySchebule</h2>
            </>
          ) : (
            <>
              <h2>EasySchebule</h2>
              <nav>
                <ul>
                  <li className="user-menu">
                    <Link to="/dashboard">
                      <Avatar
                        style={{ width: '3rem', height: '3rem' }}
                        {...config}
                      />
                    </Link>
                    <span aria-label="username">{user?.username}</span>
                  </li>
                  <li>
                    <button onClick={() => signOut()}>Sair</button>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </HeaderContent>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <HeaderContent headerDashboard>
        {isMenu ? (
          <>
            {isOpen ? (
              <X onClick={() => setSideBarState()} size={32} />
            ) : (
              <List onClick={() => setSideBarState()} size={32} />
            )}
            <h2>EasySchebule</h2>
          </>
        ) : (
          <>
            <h2>EasySchebule</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/login">Entrar</Link>
                </li>
                <li>
                  <Link to="/registro">Criar conta</Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
}
