import { Container } from './styles';
import { Header } from '../../components/Header';
import { SectionHome } from '../../components/SectionHome';
import { SideBar } from '../../components/Sidebar';
import { parseCookies } from 'nookies';

export function Home() {
  const { 'auth.token': token } = parseCookies();

  return (
    <Container>
      <Header token={token ? true : false} />
      <SectionHome />
      <SideBar isLogged={token ? true : false} />
    </Container>
  );
}
