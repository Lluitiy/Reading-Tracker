import { Headers } from './ListHeader.styled';
import useTranslation from 'Hooks/useTranslations';

const ListHeaders = () => {
	const translation = useTranslation();
	return (
		<Headers>
			<span>{translation.listHeaders.title}</span>
			<span>{translation.listHeaders.author}</span>
			<span>{translation.listHeaders.year}</span>
			<span>{translation.listHeaders.pages}</span>
		</Headers>
	);
};
export default ListHeaders;
