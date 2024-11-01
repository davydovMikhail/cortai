import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/normalize.css';
import './css/webflow.css';
import './css/cort---cortana-ai.webflow.css';
import App from './App';
import { Config, DAppProvider } from "@usedapp/core";
import { Provider } from 'react-redux';
import { store } from './store';

const DAppConfig: Config = {
  
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DAppProvider config={DAppConfig}>
    <Provider store={store}>
      <App />
    </Provider>
  </DAppProvider>
);

