import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.Light['background-form']};
  width: 80%;
  height: 80%;
  padding: 4rem;
  border-radius: 5px;
  animation: ${fadeIn} 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  h2 {
    text-align: center;
  }
  span {
    color: ${(props) => props.theme.Light['error']};
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    div + div {
      margin-top: 0.2rem;
    }
    div {
      width: 100%;
      padding: 0 10rem;
      input,
      textarea {
        width: 100%;
        display: inline-block;
        padding: 0.5rem 1rem;
        margin: 0.6rem 0rem;
        border-radius: 0.2rem;
        border: 1px solid transparent;
        background: ${(props) => props.theme.Light['background-color']};
        transition: all 0.2s ease-in-out;
        color: ${(props) => props.theme.Light['font-color']};

        &:focus {
          border: 1px solid ${(props) => props.theme.Light['button']};
        }
      }
      textarea {
        resize: 'none' !important;
        height: 15vh;
      }

      select {
        width: 100%;
        display: inline-block;
        padding: 0.5rem 1rem;
        margin: 0.6rem 0rem;
        border-radius: 0.2rem;
        border: 1px solid ${(props) => props.theme.Light['border-input']};
        transition: all 0.2s ease-in-out;
        color: ${(props) => props.theme.Light['background-color']};
        font-weight: bold;
        option {
          font-weight: bold;
        }
        &:focus {
          border: 1px solid ${(props) => props.theme.Light['button']};
        }
      }

      .create-task {
        width: 100%;
        padding: 0.5rem;
        border: none;
        cursor: pointer;
        background: ${(props) => props.theme.Light['button']};
        color: ${(props) => props.theme.Light['font-color']};
        font-weight: bold;
        margin-top: 1rem;
        transition: all 0.2s ease-in-out;

        &:disabled {
          background: ${(props) => props.theme.Light.gray} !important;
          cursor: not-allowed;
        }
        &:hover {
          background: ${(props) => props.theme.Light['logo-color']};
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    border-radius: 0.2rem;
    border: none;
    top: 0;
    right: 0;
    padding: 0.5rem;
    cursor: pointer;
    background: ${(props) => props.theme.Light['button']};
    color: ${(props) => props.theme.Light['font-color']};
    font-weight: bold;
    margin-top: 1rem;
    margin-right: 1rem;
    transition: all 0.2s ease-in-out;

    &:disabled {
      background: ${(props) => props.theme.Light['pendente-color']};
      cursor: not-allowed;
    }
    &:hover {
      background: ${(props) => props.theme.Light['pendente-color']};
    }
  }

  @media (max-width: 1075px) {
    form {
      div {
        padding: 0 0rem;
      }
    }
  }
`;
