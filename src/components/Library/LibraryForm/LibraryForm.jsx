import { Container, Section } from 'components/Common/Common.styled';
import { ReactComponent as BackArrow } from 'Assets/svg/backArrow.svg';
import { useDispatch } from 'react-redux';
import {
	AddBtn,
	AuthorLabel,
	BackBtn,
	NewBookForm,
	Input,
	Label,
	Lower,
	NameLabel,
	Upper,
	Wrapper,
	Error,
} from './LibraryForm.styled';
import { addUserBookThunk } from 'Redux/Books/booksOperations';
import useTranslation from 'Hooks/useTranslations';
import { Formik, ErrorMessage } from 'formik';
import { booksFormSchema } from 'Utils/validSchema';
import { Notify } from 'notiflix';

const LibraryForm = ({ handleFormOpen = null, isMobile }) => {
	const translation = useTranslation();
	const dispatch = useDispatch();

	const handleFormSubmit = (
		{ title, author, publishYear, pagesTotal },
		{ resetForm }
	) => {
		Notify.success(`Your book '${title}' has been successfully added!`);
		dispatch(addUserBookThunk({ title, author, publishYear, pagesTotal }));
		resetForm();
		isMobile && handleFormOpen();
	};

	return (
		<Section>
			<Container>
				<Wrapper>
					{isMobile && (
						<BackBtn
							type="button"
							onClick={handleFormOpen}
							aria-label="Return button"
						>
							<BackArrow width="24" height="24" />
						</BackBtn>
					)}
					<Formik
						onSubmit={handleFormSubmit}
						initialValues={{
							title: '',
							author: '',
							publishYear: '',
							pagesTotal: '',
						}}
						validationSchema={booksFormSchema}
					>
						<NewBookForm>
							<Upper>
								<NameLabel>
									{translation.libraryForm.book}
									<Input
										placeholder="..."
										type="text"
										name="title"
										aria-label="Input book name"
									/>
									<ErrorMessage
										name="title"
										render={() => <Error>Enter the title</Error>}
									/>
								</NameLabel>
							</Upper>
							<Lower>
								<AuthorLabel>
									{translation.libraryForm.author}
									<Input
										placeholder="..."
										type="text"
										name="author"
										aria-label="Input author"
									/>
									<ErrorMessage
										name="author"
										render={() => <Error>Enter the author</Error>}
									/>
								</AuthorLabel>
								<Label>
									{translation.libraryForm.date}
									<Input
										placeholder="..."
										type="text"
										name="publishYear"
										aria-label="Input publish year"
									/>
									<ErrorMessage
										name="publishYear"
										render={() => <Error>Min 1000AC</Error>}
									/>
								</Label>
								<Label>
									{translation.libraryForm.pages}
									<Input
										placeholder="..."
										type="text"
										name="pagesTotal"
										aria-label="Input total book pages"
									/>
									<ErrorMessage
										name="pagesTotal"
										render={() => <Error>Max 5000</Error>}
									/>
								</Label>
							</Lower>
							<AddBtn type="submit" aria-label="Add book to the books list">
								{translation.libraryForm.btnAdd}
							</AddBtn>
						</NewBookForm>
					</Formik>
				</Wrapper>
			</Container>
		</Section>
	);
};
export default LibraryForm;
