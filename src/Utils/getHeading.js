import BOOK_CATEGORY from "components/Constants/bookCategories";

const getHeading = category => {
	switch (category) {
		case BOOK_CATEGORY.goingToRead:
			return 'Going to read';
		case BOOK_CATEGORY.currentlyReading:
			return 'Reading now';
		case BOOK_CATEGORY.finishedReading:
			return 'Already read';
		default:
			return 'Other';
	}
};
export default getHeading