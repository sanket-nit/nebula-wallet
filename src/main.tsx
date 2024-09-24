import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>,
);
