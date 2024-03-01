import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';
import Loader from 'components/UI/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/frontend-project">
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
