import { DashboardComponent } from '../../layout/Dashboard';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import { parseCookies } from 'nookies';

export function Dashboard() {
  const { 'auth.token': token } = parseCookies();

  return (
    <>
      <Header token={token ? true : false} headerDashboard={true} />
      <SideBar isLogged={token ? true : false} />
      <DashboardComponent />
    </>
  );
}
