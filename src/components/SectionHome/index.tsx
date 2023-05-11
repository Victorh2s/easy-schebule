import { HomeContainer, HomeContent } from "./styles";
import imgHome from '../../assets/Complete.svg'
import { Link } from "react-router-dom";


export function SectionHome(){
  return (
   <HomeContainer>
    <HomeContent>
        <div>
          <h1>Sabemos como pode ser desafiador acompanhar todas as tarefas do dia a dia, tanto no trabalho quanto nas atividades pessoais. É por isso que criamos o EasySchedule: uma ferramenta intuitiva e eficiente para ajudá-lo a manter tudo sob controle.</h1>
          <Link to="/dashboard">Comece agora</Link>
        </div>
        <img src={imgHome} alt="" />
    </HomeContent>
   </HomeContainer>
  )
}

