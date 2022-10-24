import React from 'react';
import { useLanguageContext } from 'components/contexts/LanguageContext';
import { Option, Select } from './LanguageHandler.styled';

export default function LanguageHandler() {
	const { language, changeLanguage } = useLanguageContext();

	return (
		<Select
			value={language}
			onChange={e => changeLanguage(e.target.value)}
			aria-label="Switch language"
		>
			<Option value="en">en</Option>
			<Option value="ua">ua</Option>
		</Select>
	);
}
