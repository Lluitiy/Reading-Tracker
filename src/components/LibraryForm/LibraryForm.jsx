import { Container, Section } from 'components/Common/Common.styled';
import { useState } from 'react';
import { ReactComponent as BackArrow } from 'Assets/svg/backArrow.svg';
import { useDispatch} from 'react-redux';
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

const LibraryForm = () => {
	const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        publishYear: '',
        pagesTotal: '',
    });

	// const contacts = useSelector(selectAllContacts)
	const dispatch = useDispatch();

    const handleInputChange = e => {
		setNewBook(prevState => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleFormSubmit = e => {
		e.preventDefault();
		
		dispatch(addUserBookThunk(newBook))
		formReset();
	};
	const formReset = () => {
		setNewBook({ title: '',
        author: '',
        publishYear: '',
        pagesTotal: '',});
	};

	return (
		<Section>
			<Container>
				<Wrapper>
					<BackBtn type="button">
						<BackArrow width="24" height="24" />
					</BackBtn>
					<Form onSubmit={handleFormSubmit}>
						<Upper>
							<NameLabel>
								Book title
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
								Author
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
								Publication date
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
								Amount of pages
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
						<AddBtn type="submit">Add</AddBtn>
					</Form>
				</Wrapper>
			</Container>
		</Section>
	);
};
export default LibraryForm;