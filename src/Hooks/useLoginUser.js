import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'Redux/Auth/authOperation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function useLoginUser() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmitForm = ({ email, password }) => {
		dispatch(logIn({ email, password }));
		navigate('/');
		Notify.success(`Welcome back`);
	};

	return { onSubmitForm };
}

export default useLoginUser;
