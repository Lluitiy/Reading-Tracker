import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'Redux/Auth/authOperation';

function useLoginUser() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmitForm = ({ email, password }) => {
		dispatch(logIn({ email, password }));
		navigate('/');
	};

	return { onSubmitForm };
}

export default useLoginUser;
