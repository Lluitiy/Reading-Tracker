import { Book, LoaderH2, Page } from './SpinnerBook.styled';

const SpinnerBoook = () => {
	return (
		<>
			<Book>
				<Page></Page>
				<Page></Page>
				<Page></Page>
			</Book>

			<LoaderH2>Reading</LoaderH2>
		</>
	);
};

export default SpinnerBoook;
