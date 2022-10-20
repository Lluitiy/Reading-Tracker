import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';

const Layout = () => {
	return (
		<>
			<Header />
			<Main>
				<Spinner />
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export default Layout;
