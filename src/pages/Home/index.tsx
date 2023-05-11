import { Container } from "./styles";
import { Header } from "../../components/Header";
import { SectionHome } from "../../components/SectionHome";
import { SideBar } from "../../components/Sidebar";

export function Home(){
  return (
    <Container>
      <Header/>
      <SectionHome/>
      <SideBar />

    </Container>
  )
}

