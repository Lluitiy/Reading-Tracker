import React from 'react';
import { useLanguageContext } from '../components/contexts/LanguageContext';

export default function LanguageHandler() {
	const { language, changeLanguage } = useLanguageContext();

	return (
		<select value={language} onChange={e => changeLanguage(e.target.value)}>
			<option value="en">En- English</option>
			<option value="ua">UA- Українська</option>
		</select>
	);
}
