import { Navi, IconLink, IconLib, IconHome } from './Nav.styled';
import LanguageHandler from 'Hooks/useLanguageHandler';

const Nav = () => {
	return (
		<Navi>
			<IconLink to={'/training'}>
				<IconLib />
			</IconLink>
			<IconLink to={'/library'}>
				<IconHome />
			</IconLink>
			<LanguageHandler />
		</Navi>
	);
};
export default Nav;
