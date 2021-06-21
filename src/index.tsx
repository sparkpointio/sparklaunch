import React from 'react';
import ReactDOM from 'react-dom';
import { ResetCSS } from '@sparkpointio/sparkswap-uikit'
import GlobalStyle from './style/Global'
import './index.css';
import App from './pages/App';
// import reportWebVitals from './reportWebVitals';
import Providers from './Providers'
import 'inter-ui'
import './i18n'

if ('ethereum' in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false
}

window.addEventListener('error', () => {
   localStorage?.removeItem('redux_localstorage_simple_lists')
})

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <ResetCSS />
      <GlobalStyle />
    <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
