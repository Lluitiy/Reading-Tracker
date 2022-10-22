import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import { getIsRefreshed } from 'Redux/Auth/authSelectors';

function useRefreshCurrentUser() {
	const isRefreshing = useSelector(getIsRefreshed);
	const dispatch = useDispatch();

	useEffect(() => {
		if (dispatch(fetchCurrentUser())) return;
	}, [dispatch]);

	return { isRefreshing };
}

export default useRefreshCurrentUser;
