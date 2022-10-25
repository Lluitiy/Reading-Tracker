import { useSelector } from 'react-redux';
import { getName } from 'Redux/Auth/authSelectors';
import { UserIcon, UserWrapper, UserMeta, UserName } from './UserMenu.styled';
import { useMediaQuery } from 'react-responsive';
import { getBackupUserName } from 'Redux/Books/booksSelectors';

const UserMenu = () => {
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
	const backupUserName = useSelector(getBackupUserName) ;
	const userName = useSelector(getName) ?? backupUserName;
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
