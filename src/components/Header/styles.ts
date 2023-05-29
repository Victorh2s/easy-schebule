import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: transparent;
  padding: 2.5rem;
`;

interface HeaderContentProps {
  headerDashboard: boolean;
}

export const HeaderContent = styled.div<HeaderContentProps>`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    user-select: none;
  }

  nav ul {
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;

    button {
      background: transparent;
      border: none;
      color: ${(props) =>
        props.headerDashboard
          ? props.theme.Light['font-color']
          : props.theme.Light['background-color']};
      font-weight: bold;
    }
  }

  .user-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid ${(props) => props.theme.Light['font-color']};

    padding: 0 1.5rem;

    a + span {
      margin-left: 1rem;
    }

    a,
    span {
      display: inline-block;
      color: ${(props) => props.theme.Light['font-color']};
      font-weight: bold;
    }
  }

  li + li {
    margin-left: 2rem;
    button {
      cursor: pointer;
      color: ${(props) => props.theme.Light['font-color']};
    }
  }

  a {
    text-decoration: none;
    color: ${(props) =>
      props.headerDashboard
        ? props.theme.Light['font-color']
        : props.theme.Light['background-color']};
    font-weight: bold;
  }

  @media (max-width: 700px) {
    svg {
      margin-right: auto;
      cursor: pointer;
    }
    padding: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 100%;
      border: 1px solid black;
      h1 {
        font-size: 1rem;
      }

      a {
        font-size: 1rem;
      }
    }
  }
`;
