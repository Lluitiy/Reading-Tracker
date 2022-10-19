import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'components/Constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<HashRouter>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</HashRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
