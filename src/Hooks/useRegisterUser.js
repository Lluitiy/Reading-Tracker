import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'Redux/Auth/authOperation';

function useRegisterUser() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmitForm = ({ name, email, password }) => {
		dispatch(register({ name, email, password }));
		navigate('/');
	};

	return { onSubmitForm };
}

export default useRegisterUser;
