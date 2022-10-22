import { Container, Section } from 'components/Common/Common.styled';
import { useState } from 'react';
import { ReactComponent as BackArrow } from 'Assets/svg/backArrow.svg';
import { useDispatch } from 'react-redux';
import {
	AddBtn,
	AuthorLabel,
	BackBtn,
	Form,
	Input,
	Label,
	Lower,
	NameLabel,
	Upper,
	Wrapper,
} from './LibraryForm.styled';
import { addUserBookThunk } from 'Redux/Books/booksOperations';
import useTranslation from 'Hooks/useTranslations';

const LibraryForm = ({ handleFormOpen = null }) => {
	const translation = useTranslation();
	const [newBook, setNewBook] = useState({
		title: '',
		author: '',
		publishYear: '',
		pagesTotal: '',
	});

	const dispatch = useDispatch();

	const handleInputChange = e => {
		setNewBook(prevState => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleFormSubmit = e => {
		e.preventDefault();

		dispatch(addUserBookThunk(newBook));
		formReset();
	};
	const formReset = () => {
		setNewBook({ title: '', author: '', publishYear: '', pagesTotal: '' });
	};

	return (
		<Section>
			<Container>
				<Wrapper>
					<BackBtn type="button" onClick={handleFormOpen}>
						<BackArrow width="24" height="24" />
					</BackBtn>
					<Form onSubmit={handleFormSubmit}>
						<Upper>
							<NameLabel>
								{translation.libraryForm.book}
								<Input
									placeholder="..."
									onChange={handleInputChange}
									value={newBook.title}
									type="text"
									name="title"
									required
								/>
							</NameLabel>
						</Upper>
						<Lower>
							<AuthorLabel>
								{translation.libraryForm.author}
								<Input
									placeholder="..."
									onChange={handleInputChange}
									value={newBook.author}
									type="text"
									name="author"
									required
								/>
							</AuthorLabel>
							<Label>
								{translation.libraryForm.date}
								<Input
									placeholder="..."
									onChange={handleInputChange}
									value={newBook.publishYear}
									type="text"
									name="publishYear"
									required
								/>
							</Label>
							<Label>
								{translation.libraryForm.pages}
								<Input
									placeholder="..."
									onChange={handleInputChange}
									value={newBook.pagesTotal}
									type="text"
									name="pagesTotal"
									required
								/>
							</Label>
						</Lower>
						<AddBtn type="submit">{translation.libraryForm.btnAdd}</AddBtn>
					</Form>
				</Wrapper>
			</Container>
		</Section>
	);
};
export default LibraryForm;
