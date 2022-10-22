import React from 'react';
import { useSelector } from 'react-redux';
import { booksId } from 'Redux/Planning/planningSelectors';
import { Title, MyGoalsContainer, List, Counter, Text } from './MyGoals.styled';
import useTranslation from 'Hooks/useTranslations';

const MyGoals = () => {
	const ids = useSelector(booksId);
	const state = useSelector(state => state.planning);
	const translation = useTranslation();
	return (
		<MyGoalsContainer>
			<Title>{translation.myGoals.title}</Title>
			<List>
				<li>
					<Counter>{ids ? state.books.length : '0'}</Counter>
					<Text>{translation.myGoals.text1}</Text>
				</li>
				<li>
					<Counter>{ids ? state.duration * state.books.length : '0'}</Counter>
					<Text>{translation.myGoals.text2}</Text>
				</li>
				{false && (
					<li>
						<Counter>{0}</Counter>
						<Text>{translation.myGoals.text3}</Text>
					</li>
				)}
			</List>
		</MyGoalsContainer>
	);
};

export default MyGoals;
