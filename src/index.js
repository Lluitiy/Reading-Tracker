import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import LanguageContextProvider from 'components/contexts/LanguageContext';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { themeDark, themeLight } from 'components/Constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter basename="TeamSlice">
				<ThemeProvider theme={true ? themeLight : themeDark}>
					<LanguageContextProvider>
						<App />
					</LanguageContextProvider>
				</ThemeProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>
	// </React.StrictMode>
);
