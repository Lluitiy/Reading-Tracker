import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getName } from 'Redux/Auth/authSelectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LogoutBtn } from './LogOutBtn.styled';
import { logOut } from 'Redux/Auth/authOperation';

const LogOutBtn = () => {
	const userName = useSelector(getName);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		dispatch(logOut())
			.unwrap()
			.then(() => {
				Notify.warning(`Hope to see you Soooon ${userName}`);
				navigate('/login');
			});
	};
	return (
		<LogoutBtn type="button" onClick={handleLogOut}>
			Logout
		</LogoutBtn>
	);
};
export default LogOutBtn;
