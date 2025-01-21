import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Ui from './ui';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const rootElement = document.getElementById('root');

const App = () => (
    // making our redux store available to nested components.
    <Provider store={store}>
        <Ui />
    </Provider>
);

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
