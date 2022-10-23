import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'Redux/Auth/authSelectors';


const PrivateRoute = ({ children, redirect }) => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return isLoggedIn ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
