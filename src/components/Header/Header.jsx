import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'Redux/Auth/authOperation';
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
import { getIsLoggedIn } from 'Redux/Auth/authSelectors';

const Header = () => {
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
	const isLoggedIn = useSelector(getIsLoggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		dispatch(logOut())
			.unwrap()
			.then(() => navigate('/login'));
	};

	return (
		<Head>
			<Container>
				<HeaderWrapper>
					<Logo>br</Logo>
					{isLoggedIn && (
						<>
							{isTabletOrDesktop && <UserMenu />}
							<NavAlign>
								<Nav />
								{!isTabletOrDesktop && <UserMenu />}
								<LogoutBtn type="button" onClick={handleLogOut}>
									Logout
								</LogoutBtn>
							</NavAlign>
						</>
					)}
				</HeaderWrapper>
			</Container>
		</Head>
	);
};

export default Header;
