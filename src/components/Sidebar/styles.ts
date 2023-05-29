import styled from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
}

export const AppContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 6rem;

  h1 {
    z-index: -5;
  }
`;

export const Sidebar = styled.div<SidebarProps>`
  width: 200px;
  min-height: 10vh;
  background-color: ${(props) => props.theme.Light['background-form']};
  transition: all 0.5s ease;
  opacity: ${(props) => (props.isOpen ? '100%' : '0%')};
  transform: translateX(${(props) => (props.isOpen ? '0' : '-100%')});
  z-index: 3;
  border-end-end-radius: 2rem;
`;

export const SidebarContent = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SidebarItem = styled.li`
  padding: 0.6rem 1.5rem;
  border-top: 1px solid #ddd;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;

  a + span {
    margin-left: 1rem;
  }

  button {
    width: 100%;
    text-align: start;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.Light['font-color']};
    font-weight: bold;
    cursor: pointer;
  }

  a,
  span {
    color: ${(props) => props.theme.Light['font-color']};
    font-weight: bold;
    text-decoration: none;
  }

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.Light['link-color']};
    border-end-end-radius: 2rem;
  }
`;

export const SidebarToggleButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const SidebarToggleIcon = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #333;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0')});
`;
