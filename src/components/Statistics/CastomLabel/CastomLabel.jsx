import useTranslation from 'Hooks/useTranslations';
import PropTypes from 'prop-types'

const CastomLabel = ({ x, y, index, type, checkData=null }) => {
	const translation = useTranslation();
	
   
	if (index === checkData.length - 1) {
		return (
			<text
				x={x}
				y={y}
				dy={2}
				dx={8}
				fontSize={14}
				textAnchor={'start'}
				fill={type === 'plan' ? '#000000' : '#FF6B08'}
			>
				{type === 'plan'
					? `${translation.statistics.plan}`
					: `${translation.statistics.fact}`}
			</text>
		);
	}
};

CastomLabel.propTypes = {
	x: PropTypes.number,
	y: PropTypes.number,
	index: PropTypes.number,
	type: PropTypes.string.isRequired,
	checkData: PropTypes.array.isRequired,
}

export default CastomLabel