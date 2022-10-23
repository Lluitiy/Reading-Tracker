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
// import API from 'Services/Api/Api';

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
		}
	}, [accessToken, dispatch]);

	const send = () => {
		// 		API.postPlanning({
		//   startDate: "2022-10-21",
		//   endDate: "2022-10-23",
		//   books: [
		//     "63528fed3551fd60da51062b"
		//   ]
		// 		}).then((r)=>console.log('plan', r))
		// 		API.patchPlanning({
		//   pages: 23
		// 		}).then((r)=>console.log('patch', r))
		// API.getPlanning().then(console.log)
	};

	return isLoading ? (
		<Spinner />
	) : isDesktopOrTablet ? (
		<>
			<LibraryForm />
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
					<button onClick={send}>bub</button>
				</>
			)}
		</>
	) : (
		<MobileLibrary isLibraryEmpty={isLibraryEmpty} />
	);
};
export default LibraryPage;
