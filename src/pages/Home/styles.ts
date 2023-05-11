import { styled } from "styled-components";
import imgBackgroundHome from '../../assets/split_background.png'

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  background-image: url(${imgBackgroundHome});
  background-size: cover;
  background-repeat: no-repeat;
`;
