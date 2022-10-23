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

const LibraryForm = ({ handleFormOpen = null }) => {
	const translation = useTranslation();
	const dispatch = useDispatch();

	const handleFormSubmit = (
		{ title, author, publishYear, pagesTotal },
		{ resetForm }
	) => {
		dispatch(addUserBookThunk({ title, author, publishYear, pagesTotal }));
		resetForm();
	};

	return (
		<Section>
			<Container>
				<Wrapper>
					<BackBtn type="button" onClick={handleFormOpen}>
						<BackArrow width="24" height="24" />
					</BackBtn>
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
									<Input placeholder="..." type="text" name="title" />
									<ErrorMessage
										name="title"
										render={() => <Error>Enter the title</Error>}
									/>
								</NameLabel>
							</Upper>
							<Lower>
								<AuthorLabel>
									{translation.libraryForm.author}
									<Input placeholder="..." type="text" name="author" />
									<ErrorMessage
										name="author"
										render={() => <Error>Enter the author</Error>}
									/>
								</AuthorLabel>
								<Label>
									{translation.libraryForm.date}
									<Input placeholder="..." type="text" name="publishYear" />
									<ErrorMessage
										name="publishYear"
										render={() => <Error>Min 1000AC</Error>}
									/>
								</Label>
								<Label>
									{translation.libraryForm.pages}
									<Input placeholder="..." type="text" name="pagesTotal" />
									<ErrorMessage
										name="pagesTotal"
										render={() => <Error>Max 5000</Error>}
									/>
								</Label>
							</Lower>
							<AddBtn type="submit">{translation.libraryForm.btnAdd}</AddBtn>
						</NewBookForm>
					</Formik>
				</Wrapper>
			</Container>
		</Section>
	);
};
export default LibraryForm;
