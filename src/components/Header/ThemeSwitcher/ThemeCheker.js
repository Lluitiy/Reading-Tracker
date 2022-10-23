import { themeDark, themeLight } from 'components/Constants/theme';
// export const themeValue = new Promise(resolve => {
// 	setTimeout(() => {
// 		resolve(document.getElementById('themeCheker'));

// 		console.log('themeValue', themeValue);
// 	}, 500);
// });
// themeValue.then(value => console.log('value', value.value));
import { Notify } from 'notiflix';
export const theme = () => {
	const tema = JSON.parse(localStorage.getItem('persist:theme'));
	Notify.success(`${tema?.theme === 'true' ? true : false}`);
	return tema?.theme === 'true' ? themeLight : themeDark;
};
