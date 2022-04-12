import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const user = {
  name: "steve.jobs@example.com",
  password: "password"
};
export default user;

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    font-family: 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
}
`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);