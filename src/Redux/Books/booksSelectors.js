export const getBooksByCategory = category => state => {
	return state.books.books[category];
};
export const getAllBooks = state => state.books.books;
export const getBooksStatus = state => state.books.status;

