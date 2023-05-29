import styled from 'styled-components';

export const DashboardContainer = styled.div`
  background: transparent;
  padding: 0 2.5rem;
`;

export const DashboardContent = styled.div`
  width: 100%;
  min-height: 80vh;
  border-radius: 1rem;
`;

export const DashboardHeader = styled.header`
  width: 100%;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    width: 100%;
    border-bottom: 1px dashed white;
    padding-bottom: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    border-end-end-radius: 2rem;
    border-end-start-radius: 2rem;
    background: ${(props) => props.theme.Light['button']};
    transition: all 0.5s ease-in-out;

    .AddMoreTask {
      color: ${(props) => props.theme.Light['font-color']};
      font-weight: bold;
    }

    &:hover {
      background: ${(props) => props.theme.Light['success']} !important;
    }
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 0rem;
  padding: 1rem;
  width: 100%;
  div {
    height: 60vh;
    padding: 1rem 1.5rem;
    overflow-y: hidden;

    h3 {
      display: inline-block;
      padding: 0.5rem;
      width: 100%;

      border-bottom: 1px dashed white;
      flex: 1;
      text-align: center;
      margin-bottom: 1rem;
    }

    div {
      overflow-y: auto;
      height: 52vh;
      margin-bottom: 1rem;
      div + div {
        margin-top: 1rem;
      }
    }
  }

  .grid-pendente {
    h3 {
      color: ${(props) => props.theme.Light['pendente-color']};
    }
  }

  .grid-andamento {
    h3 {
      color: ${(props) => props.theme.Light['fazendo-color']};
    }
  }

  .grid-finalizado {
    h3 {
      color: ${(props) => props.theme.Light['feito-color']};
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
