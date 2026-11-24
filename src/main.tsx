import React, { StrictMode, Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryState {
  hasError: boolean;
}

class AppErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error de renderizado en Genera Automotriz:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#07111F] text-white flex flex-col items-center justify-center px-6 py-12 text-center">
          <h1 className="text-xl font-bold mb-2">Genera Automotriz</h1>
          <p className="text-sm text-slate-300 mb-6 max-w-md">
            Ocurrió un problema al cargar la vista en tu navegador. Por favor recarga la página o contáctanos por WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-xl bg-[#1769E0] text-white text-sm font-bold"
            >
              Recargar página
            </button>
            <a
              href="https://wa.me/526624330056"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold"
            >
              WhatsApp (662) 433 0056
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </StrictMode>
);
