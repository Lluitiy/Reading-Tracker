import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from 'Redux/Theme/themeSlice';
import useToggleTheme from 'Hooks/useToggleTheme';

const ThemeSwitcher = () => {
	const isLightTheme = useToggleTheme();
	const [checked, setChecked] = useState(isLightTheme);
	const dipsatch = useDispatch();

	const handleChange = () => {
		setChecked(!checked);
		dipsatch(toggleTheme(checked));
	};

	return (
		<label className="theme-switch__label">
			<input
				type="checkbox"
				value={checked}
				checked={checked}
				onChange={handleChange}
				className="theme-switch__input"
			/>
			<span>Switch theme</span>
		</label>
	);
};

export default ThemeSwitcher;
