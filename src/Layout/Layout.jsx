import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from 'components/Spinner/Spinner';

// import SpinnerBoook from 'components/Spinner/SpinnerBook';
// <SpinnerBoook />

const Layout = () => {
	return (
		<>
			<Header />
			<Main>
				<Suspense fallback={<Spinner />}>
					<Outlet />
				</Suspense>
			</Main>
			<Footer />
		</>
	);
};

export default Layout;
