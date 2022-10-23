import LanguageHandler from 'components/LanguageHandler/LanguageHandler';
import ThemeSwitcher from 'components/Header/ThemeSwitcher/ThemeSwitcher';
import { Wrap } from './Settings.styled';

const Settings = () => {
	return (
		<Wrap>
			<LanguageHandler />
			<ThemeSwitcher />
		</Wrap>
	);
};
export default Settings;
