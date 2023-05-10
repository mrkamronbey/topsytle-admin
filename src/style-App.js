import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.div`
  display: flex;
`;
export const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior:smooth
    }
  body {
    margin: 0;
    padding: 0;
    font-family: "Ubuntu", sans-serif;
    color: white;
  }

  
`;

export const WrapperContainer = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #EEEEEE;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  height: 100%;
  padding: 30px;
`;
