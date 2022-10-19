import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import { getIsRefreshing } from 'Redux/Auth/authSelectors';

function useRefreshCurrentUser() {
	const isRefreshing = useSelector(state => getIsRefreshing(state));
	const dispatch = useDispatch();

	useEffect(() => {
		if (dispatch(fetchCurrentUser())) return;
		// dispatch(getCurrentUser());
	}, [dispatch]);

	return { isRefreshing };
}

export default useRefreshCurrentUser;
