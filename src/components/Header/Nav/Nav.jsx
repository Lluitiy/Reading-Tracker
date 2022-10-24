import { Navi, IconLink, IconLib, IconHome } from './Nav.styled';

const Nav = () => {
	return (
		<Navi>
			<IconLink to={'/training'} aria-label="Training link">
				<IconLib />
			</IconLink>
			<IconLink to={'/library'} aria-label="Library link">
				<IconHome />
			</IconLink>
		</Navi>
	);
};
export default Nav;
