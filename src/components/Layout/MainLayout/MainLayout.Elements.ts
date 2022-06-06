import tw from 'twin.macro';
import styled, { createGlobalStyle } from 'styled-components';

/**
 * Global styles for the main layout
 */

export const GlobalStylesMainLayout = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #E6E9F3;
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.2;
  }

  h4 {
    font-size: 1.2rem;
    line-height: 1.2;
  }

  h5 {
    font-size: 1rem;
    line-height: 1.2;
  }

  h6 {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  ul,
  ol {
    list-style: none;
  }
`;

/**
 * Container for the main layout
 * Desktop - 3 columns [1fr, 2fr, 1fr]
 * Mobile - 1 column [1fr]
 */

export const MainLayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 920px) {
    display: grid;
    grid-template-columns: 20rem 1fr 35rem;
    grid-template-rows: 1fr;
    gap: 1rem;
  }
`;

export const RightSideBar = styled.div`
  display: none;

  @media screen and (min-width: 920px) {
    background-color: black;
    padding: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
