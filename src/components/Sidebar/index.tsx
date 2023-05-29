import { AppContainer, Sidebar, SidebarContent, SidebarItem } from './styles';
import { useSideBarContext } from '../../context/SideBarContext';
import { Link } from 'react-router-dom';
import Avatar, { genConfig } from 'react-nice-avatar';
import { useAuthContext } from '../../context/AuthContext';

interface SideBarProps {
  isLogged: boolean;
}

export const SideBar = ({ isLogged }: SideBarProps) => {
  const { isOpen } = useSideBarContext();
  const { signOut, user } = useAuthContext();

  const config = genConfig();

  if (isLogged) {
    return (
      <>
        <AppContainer>
          <Sidebar isOpen={isOpen}>
            <SidebarContent>
              <SidebarItem>
                <Link to="/dashboard">
                  <Avatar
                    style={{ width: '3rem', height: '3rem' }}
                    {...config}
                  />
                </Link>
                <span>{user?.username}</span>
              </SidebarItem>
              <SidebarItem>
                <button onClick={() => signOut()}>Sair</button>
              </SidebarItem>
            </SidebarContent>
          </Sidebar>
        </AppContainer>
      </>
    );
  }

  return (
    <>
      <AppContainer>
        <Sidebar isOpen={isOpen}>
          <SidebarContent>
            <SidebarItem>
              <Link to="/login">Entrar</Link>
            </SidebarItem>
            <SidebarItem>
              <Link to="/resgistro">Criar conta</Link>
            </SidebarItem>
          </SidebarContent>
        </Sidebar>
      </AppContainer>
    </>
  );
};
