import {  AppContainer, Sidebar, SidebarContent, SidebarItem } from "./styles";
import { useSideBarContext } from "../../context/SideBarContext";
import { Link } from "react-router-dom";




export const SideBar = () => {
  const { isOpen } = useSideBarContext();

  return (
    <>
      <AppContainer>
          <Sidebar isOpen={isOpen}>
            <SidebarContent>
              <SidebarItem>
                <Link to="/login">Entrar</Link>
              </SidebarItem>
              <SidebarItem>
              <Link to="/resgistro">Cadastrar</Link>
              </SidebarItem>
            </SidebarContent>
          </Sidebar>
    </AppContainer>
    </>
  );
};

