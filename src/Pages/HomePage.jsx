import { useMediaQuery } from 'react-responsive';
import MobilPage from 'components/MobilPage';
import LoginPage from 'Pages/LogInPage/LogInPage';

export default function Home() {
	const isTablet = useMediaQuery({
		query: '(min-width: 768px)',
	});

	return <>{isTablet ? <LoginPage /> : <MobilPage />}</>;
}
