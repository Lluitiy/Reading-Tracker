import { themeDark, themeLight } from 'components/Constants/theme';

export const theme = () => {
	const parsedTheme = JSON.parse(localStorage.getItem('persist:theme'));
	return parsedTheme?.theme === 'true' ||
		parsedTheme?.theme === null ||
		parsedTheme?.theme === undefined
		? themeLight
		: themeDark;
};
