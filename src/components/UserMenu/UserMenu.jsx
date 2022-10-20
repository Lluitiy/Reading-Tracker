import { useSelector } from 'react-redux';
import { getName } from 'Redux/Auth/authSelectors';
import { UserIcon, UserWrapper, UserMeta, UserName } from './UserMenu.styled';
import { useMediaQuery } from 'react-responsive';

const UserMenu = () => {
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

	const userName = useSelector(getName);
	const userIcon = userName?.slice(0, 1).toUpperCase();

	return (
		<UserWrapper>
			{isTabletOrDesktop ? (
				<UserMeta>
					<UserIcon>{userIcon}</UserIcon>
					<UserName>{userName}</UserName>
				</UserMeta>
			) : (
				<UserIcon>{userIcon}</UserIcon>
			)}
		</UserWrapper>
	);

	//
};

export default UserMenu;
