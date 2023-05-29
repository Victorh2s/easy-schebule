import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.Light['background-color']};
  padding: 2.5rem;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  background: ${(props) => props.theme.Light['background-form']};
  width: 720px;
  min-height: 90vh;
  border-radius: 2rem;
  padding: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 0px 0px 51px 7px rgba(0, 0, 0, 0.32);

  .form-info {
    text-align: center;
    margin-bottom: 1rem;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.Light['font-color']};
      h1 {
        user-select: none;
        margin-bottom: 1rem;
      }
    }

    span {
      a {
        color: ${(props) => props.theme.Light['button']};
      }
    }
  }

  .form-inputs {
    width: 100%;

    .status-error {
      width: 100%;
      text-align: center;
      display: inline-block;
      padding: 1rem;
      color: ${(props) => props.theme.Light['error']};
    }

    .status-success {
      width: 100%;
      text-align: center;
      display: inline-block;
      padding: 1rem;
      color: ${(props) => props.theme.Light['success']};
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 0.9rem;
        color: ${(props) => props.theme.Light['error']};
      }
    }

    label {
      font-weight: bold;
    }

    input {
      width: 100%;
      display: inline-block;
      padding: 0.5rem 1rem;
      margin: 0.6rem 0rem;
      border-radius: 0.2rem;
      transition: all 0.2s ease-in-out;
      border: 1px solid transparent;
      background: ${(props) => props.theme.Light['background-color']};
      color: ${(props) => props.theme.Light['font-color']};

      &:focus {
        border: 1px solid ${(props) => props.theme.Light['button']};
      }
    }
  }
`;

export const Submit = styled.input`
  cursor: pointer;
  background: ${(props) => props.theme.Light['button']} !important;
  color: ${(props) => props.theme.Light['background-color']};
  font-weight: bold;
  margin-top: 2rem;
  border: none !important;
  transition: all 0.2s ease-in-out;

  &:disabled {
    background: ${(props) => props.theme.Light.gray} !important;
    cursor: not-allowed;
  }
`;
