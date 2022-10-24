import React from 'react';
import { useSelector } from 'react-redux';
import { booksId, showResultsSection } from 'Redux/Planning/planningSelectors';
import {
	Title,
	MyGoalsContainer,
	List,
	Counter,
	Text,
	Item,
} from './MyGoals.styled';
import useTranslation from 'Hooks/useTranslations';

const MyGoals = () => {
	const ids = useSelector(booksId);
	const state = useSelector(state => state.planning);
	const translation = useTranslation();
	const isShowResultsSection = useSelector(showResultsSection);
	const booksLefts = state.books.filter(
		({ pagesTotal, pagesFinished }) => pagesTotal !== pagesFinished
	);

	return (
		<MyGoalsContainer>
			<Title>{translation.myGoals.title}</Title>
			{isShowResultsSection ? (
				<List startTraining>
					<Item startTraining>
						<Counter startTraining>{ids ? state.books.length : '0'}</Counter>
						<Text>{translation.myGoals.text1}</Text>
					</Item>
					<Item startTraining>
						<Counter startTraining>
							{ids ? state.duration * state.books.length : '0'}
						</Counter>
						<Text>{translation.myGoals.text2}</Text>
					</Item>
					<Item startTraining>
						<Counter active startTraining>
							{booksLefts.length}
						</Counter>
						<Text>{translation.myGoals.text3}</Text>
					</Item>
				</List>
			) : (
				<List>
					<Item>
						<Counter>{ids ? state.books.length : '0'}</Counter>
						<Text>{translation.myGoals.text1}</Text>
					</Item>
					<Item>
						<Counter>{ids ? state.duration * state.books.length : '0'}</Counter>
						<Text>{translation.myGoals.text2}</Text>
					</Item>
				</List>
			)}
		</MyGoalsContainer>
	);
};

export default MyGoals;
