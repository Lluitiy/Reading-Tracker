import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'Redux/Auth/authOperation';

function useLogoutUser() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logout = () => {
		dispatch(logOut())
			.unwrap()
			.then(() => navigate('/login'));
	};

	return logout;
}

export default useLogoutUser;
