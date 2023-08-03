import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/components/App';
import { KonstaProvider } from 'konsta/react';

import './styles/global.css';

ReactDOM.createRoot(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById('app')!
).render(
  <KonstaProvider theme="ios" dark={true}>
    <App />
  </KonstaProvider>
);
