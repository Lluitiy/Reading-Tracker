import LibraryForm from 'components/Library/LibraryForm/LibraryForm';
import LibraryList from 'components/Library/LibraryList/LibraryList';
import MobileLibrary from 'components/Library/MobileLibrary/MobileLibrary';
import Spinner from 'components/Spinner/Spinner';
import useTranslation from 'Hooks/useTranslations';

import STATUS from 'components/Constants/status';
import BOOK_CATEGORY from 'components/Constants/bookCategories';

import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from 'Redux/Auth/authSelectors';
import { useEffect } from 'react';
import { getUserBooksThunk } from 'Redux/Books/booksOperations';
import { getAllBooks, getBooksStatus } from 'Redux/Books/booksSelectors';
import EmptyLibraryInfo from 'components/Library/EmptyLibraryInfo/EmptyLibraryInfo';
import { getCurrentPlanning } from 'Redux/Planning/planningOperations';


const LibraryPage = () => {
	const translation = useTranslation();
	const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
	const status = useSelector(getBooksStatus);
	const accessToken = useSelector(getAccessToken);

	const isLoading = status === STATUS.pending;
	const dispatch = useDispatch();
	const allBooks = useSelector(getAllBooks);

	const isLibraryEmpty =
		Object.values(allBooks).every(el => el.length === 0) &&
		status === STATUS.fulfilled;

	useEffect(() => {
		if (accessToken) {
			dispatch(getUserBooksThunk());
			dispatch(getCurrentPlanning());
		}
	}, [accessToken, dispatch]);


	return isLoading ? (
		<Spinner />
	) : isDesktopOrTablet ? (
		<>
				<LibraryForm isMobile={ !isDesktopOrTablet} />
			{isLibraryEmpty ? (
				<EmptyLibraryInfo />
			) : (
				<>
					<LibraryList
						category={BOOK_CATEGORY.finishedReading}
						going={translation.libraryListHeaders.going}
					/>
					<LibraryList category={BOOK_CATEGORY.currentlyReading} />
					<LibraryList category={BOOK_CATEGORY.goingToRead} />
				</>
			)}
		</>
	) : (
		<MobileLibrary isLibraryEmpty={isLibraryEmpty} />
	);
};
export default LibraryPage;
