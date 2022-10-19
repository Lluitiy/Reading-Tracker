import { Container } from 'components/Common/Common.styled';
import Nav from 'components/Nav/Nav';
import UserMenu from 'components/UserMenu/UserMenu';
import {
	Head,
	HeaderWrapper,
	Logo,
	LogoutBtn,
	NavAlign,
} from './Header.styled';

const Header = () => {
	return (
		<Head>
			<Container>
				<HeaderWrapper>
					<Logo>br</Logo>
					<NavAlign>
						<UserMenu />
						<Nav />
						<LogoutBtn>Logout</LogoutBtn>
					</NavAlign>
				</HeaderWrapper>
			</Container>
		</Head>
	);
};

export default Header;
