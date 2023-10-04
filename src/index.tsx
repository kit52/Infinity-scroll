import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './app/App';
import 'app/styles/index.scss';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { Provider } from 'react-redux';
import { setupStore } from 'app/store/store';
import { createRoot } from 'react-dom/client';
const store = setupStore();

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ErrorBoundary>
);
