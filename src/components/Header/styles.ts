import { styled } from "styled-components";

export const HeaderContainer = styled.header `
  background: transparent;
  padding: 2.5rem;

`;



export const HeaderContent = styled.div`

  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2{
    user-select: none;
  }

  nav ul {
    display: flex;


  }

  li {
    list-style: none;

  }

  li + li {
    margin-left: 2rem;
  }

  a{
    text-decoration: none;
    color: ${props => props.theme.Light["background-color"]};
    font-weight: bold;
  }

  @media (max-width: 1075px) {
   
    a{
    text-decoration: none;
    color: ${props => props.theme.Light["font-color"]};
    font-weight: bold;
  }
  }

  @media (max-width: 700px){
   
    svg {
      margin-right: auto;
      cursor: pointer;
    }
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
    width: 100%;
    border: 1px solid black;
      h1{
        font-size: 1rem;
      }

      a{
        font-size: 1rem;
      }
    }

  }
`