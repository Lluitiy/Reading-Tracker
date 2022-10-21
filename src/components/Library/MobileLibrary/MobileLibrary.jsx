import BOOK_CATEGORY from 'components/Constants/bookCategories';
import LibraryList from 'components/Library/LibraryList/LibraryList';
import { useState } from 'react';
import EmptyLibraryInfo from '../EmptyLibraryInfo/EmptyLibraryInfo';
import { PlusBtn } from './MobileLibrary.styled';

const {
	default: LibraryForm,
} = require('components/Library/LibraryForm/LibraryForm');

const MobileLibrary = ({ isLibraryEmpty }) => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const toggleFormOpen = () => {
		setIsFormOpen(prevState => !prevState);
	};
	return (
		<>
			{isFormOpen ? (
				<LibraryForm handleFormOpen={toggleFormOpen} />
			) : isLibraryEmpty ? (
				<EmptyLibraryInfo openFormHandler={toggleFormOpen} />
			) : (
				<>
					<LibraryList category={BOOK_CATEGORY.finishedReading} />
					<LibraryList category={BOOK_CATEGORY.currentlyReading} />
					<LibraryList category={BOOK_CATEGORY.goingToRead} />
					<PlusBtn type="button" onClick={toggleFormOpen}>
						+
					</PlusBtn>
				</>
			)}
		</>
	);
};
export default MobileLibrary;
