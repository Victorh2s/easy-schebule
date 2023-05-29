import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 0 7.5rem;
  width: 100%;

  @media (max-width: 700px) {
    padding: 0 0.5rem;
  }
`;

export const HomeContent = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    max-width: 450px;

    a {
      display: block;
      width: 50%;
      margin-top: 1.5rem;
      padding: 0.5rem 1.5rem;
      border-radius: 2rem;
      border: none;
      cursor: pointer;
      text-align: center;
      background: ${(props) => props.theme.Light.button};
      text-decoration: none;
      color: white;
      font-weight: bold;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: ${(props) => props.theme.Light['link-color']};
        color: ${(props) => props.theme.Light['font-color']};
      }
    }
  }

  img {
    max-width: 450px;
  }

  div + img {
    margin-left: 2rem;
  }

  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;

      a {
        display: block;
        width: 50%;
        margin-top: 1.5rem;
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        border: none;
        cursor: pointer;
        text-align: center;
        background: ${(props) => props.theme.Light.button};
        text-decoration: none;
        color: white;
        font-weight: bold;
      }
    }

    img {
      display: none;
    }
  }
  @media (max-width: 700px) {
    padding: 0 0.5rem;

    div {
      width: 100%;
      h1 {
        font-size: 1rem;
      }

      a {
        font-size: 1rem;
      }
    }
  }
`;
