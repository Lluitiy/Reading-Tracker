import { Container, Section } from 'components/Common/Common.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Label } from './LibraryForm.styled';

const LibraryForm = () => {
	const [contact, setContact] = useState({ name: '', number: '' });

	// const contacts = useSelector(selectAllContacts)
	const dispatch = useDispatch();

	const onInputChange = e => {
		setContact(prevState => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const onFormSubmit = e => {
		e.preventDefault();
		const newContact = contact;

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
				<div>
					<Form onSubmit={onFormSubmit}>
						<Label>
							Назва книги
							<input
								onChange={onInputChange}
								value={contact.name}
								type="text"
								name="name"
								required
							/>
						</Label>

						<Label>
							Автор книги
							<input
								onChange={onInputChange}
								value={contact.name}
								type="text"
								name="name"
								required
							/>
						</Label>
						<Label>
							Рік випуску
							<input
								onChange={onInputChange}
								value={contact.name}
								type="text"
								name="name"
								required
							/>
						</Label>
						<Label>
							Кількість сторінок
							<input
								onChange={onInputChange}
								value={contact.name}
								type="text"
								name="name"
								required
							/>
                        </Label>
                        <button type='submit'>Додати</button>
					</Form>
				</div>
			</Container>
		</Section>
	);
};
export default LibraryForm;
