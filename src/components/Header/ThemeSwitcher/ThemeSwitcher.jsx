import { useState } from 'react';

const ThemeSwitcher = () => {
	const [checked, setChecked] = useState(false);
	const handleChange = e => {
		setChecked(!checked);
		console.log('chekbox', e.target.checked);

		console.log(
			checked
				? `${p => p.theme.colors.textmain}`
				: `${p => (p.theme.colors.textmain = '#ffffff')}`
		);
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
