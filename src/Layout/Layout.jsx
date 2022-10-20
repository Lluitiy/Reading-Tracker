import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export default Layout;
