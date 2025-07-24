import 'aos/dist/aos.css';
import AOS from 'aos';
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function Main() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
