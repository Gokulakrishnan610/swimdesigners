import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

function Main() {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
