import { Navi, IconLink, IconLib, IconHome } from './Nav.styled';

const Nav = () => {
	return (
		<Navi>
			<IconLink to={'/library'}>
				<IconLib />
			</IconLink>
			<IconLink to={'/register'}>
				<IconHome />
			</IconLink>
		</Navi>
	);
};
export default Nav;
