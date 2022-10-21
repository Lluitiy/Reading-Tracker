import React from 'react';
import { useSelector } from 'react-redux';
import { booksId } from 'Redux/Planning/planningSelectors';
import { Title, MyGoalsContainer, List, Counter, Text } from './MyGoals.styled';

const MyGoals = () => {
	const ids = useSelector(booksId);
	const state = useSelector(state => state.planning);
	return (
		<MyGoalsContainer>
			<Title>My goals</Title>
			<List>
				<li>
					<Counter>{ids?state.books.length:'0'}</Counter>
					<Text>Amount of books</Text>
				</li>
				<li>
					<Counter>{ids?state.duration * state.books.length:'0'}</Counter>
					<Text>Amount of days</Text>
				</li>
				{false && (
					<li>
						<Counter>{0}</Counter>
						<Text>Books lefts</Text>
					</li>
				)}
			</List>
		</MyGoalsContainer>
	);
};

export default MyGoals;
