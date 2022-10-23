import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from 'Redux/Theme/themeSlice';
import useToggleTheme from 'Hooks/useToggleTheme';
import { ThemeButton, LightIcon, DarktIcon } from './ThemeSwitcher.styled';

const ThemeSwitcher = () => {
	const isLightTheme = useToggleTheme();
	const [checked, setChecked] = useState(isLightTheme);
	const dipsatch = useDispatch();
	const handleSubmit = () => {
		setChecked(prevState => !prevState);
	};
	useEffect(() => {
		dipsatch(toggleTheme(checked));
	}, [checked, dipsatch]);

	return (
		<form onSubmit={handleSubmit}>
			<ThemeButton type="submit">
				{checked ? (
					<LightIcon width={22} height={22} />
				) : (
					<DarktIcon width={22} height={22} />
				)}
			</ThemeButton>
		</form>
	);
};

export default ThemeSwitcher;
