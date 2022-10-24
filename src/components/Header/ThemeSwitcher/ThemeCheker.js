import { themeDark, themeLight } from 'components/Constants/theme';

export const theme = () => {
	const tema = JSON.parse(localStorage.getItem('persist:theme'));
	return tema?.theme === 'true' ? themeLight : themeDark;
};
