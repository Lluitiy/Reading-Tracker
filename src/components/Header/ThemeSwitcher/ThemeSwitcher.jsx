import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from 'Redux/Theme/themeSlice';
import useToggleTheme from 'Hooks/useToggleTheme';

const ThemeSwitcher = () => {
	const isLightTheme = useToggleTheme();
	const [checked, setChecked] = useState(isLightTheme);
	const dipsatch = useDispatch();

	const handleChange = () => {
		setChecked(prevState => !prevState);
	};
	useEffect(() => {
		dipsatch(toggleTheme(checked));
	}, [checked, dipsatch]);

	return (
		<form>
			<label className="theme-switch__label">
				<input
					id="themeCheker"
					type="checkbox"
					value={checked}
					checked={checked}
					onChange={handleChange}
					className="theme-switch__input"
				/>
				<span>Switch theme</span>
				<button type="submit"> qwe</button>
			</label>
		</form>
	);
};

export default ThemeSwitcher;
