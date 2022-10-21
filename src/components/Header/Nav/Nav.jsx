import { Navi, IconLink, IconLib, IconHome } from './Nav.styled';

const Nav = () => {
	return (
		<Navi>
			<IconLink to={'/training'}>
				<IconLib />
			</IconLink>
			<IconLink to={'/library'}>
				<IconHome />
			</IconLink>
		</Navi>
	);
};
export default Nav;
