import './styles/index.scss';
import './styles/fonts.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { QueryClientProvider } from 'react-query';

import App from './App';
import { queryClient } from './plugins/react-query';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster position="top-center" reverseOrder={false} gutter={8} />
    </QueryClientProvider>
  </React.StrictMode>,
);
