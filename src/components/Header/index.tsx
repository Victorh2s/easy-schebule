import { useEffect, useState } from "react";
import { HeaderContainer, HeaderContent } from "./styles";
import { List, X } from "@phosphor-icons/react";
import { useSideBarContext } from "../../context/SideBarContext";
import { Link } from "react-router-dom";

export function Header(){
  const [isMenu, setIsMenu] = useState(false)
  const { setSideBarState, setSideBarStateFalse, isOpen } = useSideBarContext();

  useEffect(()=> {
    const handleResize = () => {
      setIsMenu(window.innerWidth <= 700);
      if(window.innerWidth > 700){
        setSideBarStateFalse()
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[setSideBarStateFalse])





  return (
    <HeaderContainer>
      <HeaderContent >
        {isMenu ? 
        ( 
        <>
        {isOpen ? <X onClick={()=> setSideBarState()} size={32}  /> : <List onClick={()=> setSideBarState()} size={32}  /> }
          <h2>EasySchebule</h2>
        </>
        )
         : 
          (
          <>
            <h2>EasySchebule</h2>
            <nav>
              <ul>
                <li><Link to="/login">Entrar</Link></li>
                <li><Link to="/registro">Cadastrar</Link></li>
              </ul>
            </nav>

          </>
          )
        }
        
      </HeaderContent>
    </HeaderContainer>
  )
}