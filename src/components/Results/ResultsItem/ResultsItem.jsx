import {
	DateText,
	PagesCountSpan,
	PagesCountText,
	ResultsPageItem,
	TimeUpdateText,
} from './ResultsItem.styled';
import PropTypes from 'prop-types';

export default function ResultsItem({ data: { time, pagesCount } }) {
	const date = time.slice(0, 10);
	const timeUpdate = time.slice(11, 16);

	return (
		<ResultsPageItem>
			<DateText>{date}</DateText>
			<TimeUpdateText>{timeUpdate}</TimeUpdateText>
			<PagesCountText>
				{pagesCount} <PagesCountSpan> pages</PagesCountSpan>
			</PagesCountText>
		</ResultsPageItem>
	);
}

ResultsItem.propTypes = {
	
			time: PropTypes.string,
			pagesCount: PropTypes.number,
	

};
