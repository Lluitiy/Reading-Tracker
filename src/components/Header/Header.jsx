import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'Redux/Auth/authSelectors';

// import LanguageHandler from 'components/LanguageHandler/LanguageHandler';
// import Settings from 'components/Settings/Settings';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import UserMenu from './UserMenu/UserMenu';
import LogOutBtn from './LogOutBtn/LogOutBtn';

import { Head, HeaderWrapper, NavAlign } from './Header.styled';
import { Container } from 'components/Common/Common.styled';
// import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

const Header = () => {
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
	const isLoggedIn = useSelector(getIsLoggedIn);

	return (
		<Head>
			<Container>
				<HeaderWrapper>
					<Logo />
					{isLoggedIn && (
						<>
							{isTabletOrDesktop && <UserMenu />}

							<NavAlign>
								<Nav />
								{!isTabletOrDesktop && <UserMenu />}
								<LogOutBtn />
							</NavAlign>
						</>
					)}
				</HeaderWrapper>
			</Container>
		</Head>
	);
};

export default Header;
