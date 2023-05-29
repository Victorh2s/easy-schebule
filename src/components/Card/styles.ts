import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 10vh !important;
  border-radius: 0.5rem !important;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #333333;
  overflow-y: hidden !important;

  h4 {
    width: 100%;
    height: 5vh;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 1rem;
    svg {
      cursor: pointer;
    }

    svg + svg {
      margin-top: 0.5rem;
    }
  }
`;
