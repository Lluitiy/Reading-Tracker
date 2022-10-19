import { Container, Section } from 'components/Common/Common.styled';
import { useState } from 'react';
// import { useDispatch} from 'react-redux';
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
import { ReactComponent as BackArrow } from 'Assets/svg/backArrow.svg';

const LibraryForm = () => {
	const [contact, setContact] = useState({ name: '', number: '' });

	// const contacts = useSelector(selectAllContacts)
	// const dispatch = useDispatch();

	const onInputChange = e => {
		setContact(prevState => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const onFormSubmit = e => {
		e.preventDefault();
		// const newContact = contact;

		// if (contacts.some(({ name }) => name === newContact.name)) {
		//     alert(`${newContact.name} is already in contacts!`);
		//     return;
		// }
		// dispatch(addContactThunk(newContact))
		formReset();
	};
	const formReset = () => {
		setContact({ name: '', number: '' });
	};

	return (
		<Section>
			<Container>
				<Wrapper>
					<BackBtn type="button">
						<BackArrow width="24" height="24" />
					</BackBtn>
					<Form onSubmit={onFormSubmit}>
						<Upper>
							<NameLabel>
								Назва книги
								<Input
									placeholder="..."
									onChange={onInputChange}
									value={contact.name}
									type="text"
									name="name"
									required
								/>
							</NameLabel>
						</Upper>
						<Lower>
							<AuthorLabel>
								Автор книги
								<Input
									placeholder="..."
									onChange={onInputChange}
									value={contact.name}
									type="text"
									name="name"
									required
								/>
							</AuthorLabel>
							<Label>
								Рік випуску
								<Input
									placeholder="..."
									onChange={onInputChange}
									value={contact.name}
									type="text"
									name="name"
									required
								/>
							</Label>
							<Label>
								Кількість сторінок
								<Input
									placeholder="..."
									onChange={onInputChange}
									value={contact.name}
									type="text"
									name="name"
									required
								/>
							</Label>
						</Lower>
						<AddBtn type="submit">Додати</AddBtn>
					</Form>
				</Wrapper>
			</Container>
		</Section>
	);
};
export default LibraryForm;
