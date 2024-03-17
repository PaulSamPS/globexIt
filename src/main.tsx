import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App.tsx';
import './app/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>
);
