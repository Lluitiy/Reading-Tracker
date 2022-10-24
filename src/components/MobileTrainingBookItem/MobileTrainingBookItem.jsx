
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { ReactComponent as CheckIcon } from 'Assets/svg/CheckBox.svg';
// import { useState } from 'react';
import { ReactComponent as TrashIcon } from 'Assets/svg/delete.svg';
import useTranslation from 'Hooks/useTranslations';
import { DeleteIconThumb, IconThumb, MobileItemWrapper, Table, TableDetail, TableHeader, TableRow } from './MobileTrainingBookItem.styled';
import { OverflowText } from 'components/Library/LibraryItem/LibraryItem.styled';
import { useSelector } from 'react-redux';
import { showResultsSection } from 'Redux/Planning/planningSelectors';
import { CheckBox, TrashButton } from 'components/TrainingBookList/TrainingBookList.styled';

const MobileTrainingBookItem = ({
	title,
	author,
	publishYear,
	fill,
	pagesTotal,
	pagesFinished,
	handleDelete,
	id,
}) => {
	const translation = useTranslation();
	const isShowResultsSection = useSelector(showResultsSection);
	return (
		<MobileItemWrapper>
			<IconThumb>
				{/* {' '}
				<BookIcon fill='#A6ABB9' width={22} height={17} /> */}
				{!isShowResultsSection && (
										<BookIcon fill="#A6ABB9" width={22} height={17} />
									)}
									{isShowResultsSection && (
										<CheckBox>
											{pagesFinished === pagesTotal ? (
												<input type="checkbox" id={id} checked disabled />
											) : (
												<input type="checkbox" id={id} disabled />
											)}
											<label htmlFor={id}>
												<CheckIcon />
											</label>
										</CheckBox>
									)}
			</IconThumb>
			{!isShowResultsSection && (<DeleteIconThumb>
										<TrashButton type='button' onClick={() => handleDelete(id)}>
											<TrashIcon width={22} height={17} />
				</TrashButton>
				</DeleteIconThumb>
									)}
			
			
			
			<OverflowText>{title}</OverflowText>
			<Table>
				<tbody>
					<TableRow>
						<TableHeader>{translation.mobileLibraryItem.author}</TableHeader>
						<TableDetail>{author}</TableDetail>
					</TableRow>
					<TableRow>
						<TableHeader>{translation.mobileLibraryItem.year}</TableHeader>
						<TableDetail>{publishYear}</TableDetail>
					</TableRow>
					<TableRow>
						<TableHeader>{translation.mobileLibraryItem.pages}</TableHeader>
						<TableDetail>{pagesTotal}</TableDetail>
					</TableRow>
					
				</tbody>
			</Table>

		</MobileItemWrapper>
	);
};
export default MobileTrainingBookItem;
