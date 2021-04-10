import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import './normalize.css';

import Theme from './Theme';

const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colour.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.medium};

    @media (max-width: ${theme.breakpoint.mobile}) {
      font-size: ${theme.font.size.small};
      background-color: ${theme.colour.background};
    }
  `}
`;

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <header></header>
      <main>
        <Text>Hello, there!</Text>
      </main>
      <footer></footer>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
