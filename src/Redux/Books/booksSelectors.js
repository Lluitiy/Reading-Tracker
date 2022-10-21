export const getBooksByCategory = category => state => {
	return state.books[category];
};
export const getAllBooks = state => state.books;

export const getIsLoadingBooks = state => state.books.isLoadingBooks;
