import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RecoilRoot} from 'recoil';
import {BrowserRouter} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {GoogleOAuthProvider} from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="568270856302-kidmnkm40vkfd2i4d5miv5q44h857sm1.apps.googleusercontent.com">
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
