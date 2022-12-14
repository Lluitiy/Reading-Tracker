import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Modal from 'components/Modal';
import ResultsItem from 'components/Results/ResultsItem/ResultsItem';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addReadingPage,
	getCurrentPlanning,
} from 'Redux/Planning/planningOperations';
import {
	selectorPlanFact,
	selectorReadedPages,
	selectorPagesReaded,
} from 'Redux/Planning/planningSelectors';

import {
	ResultsBox,
	ResultsTitle,
	ResultsForm,
	FormBox,
	ResultsLabel,
	ResultsInput,
	ResultsBtn,
	StatisticsPageBox,
	StatisticsPageTitle,
	ResultsPageList,
	CalenderResults,
} from './Results.styled';
import { useEffect } from 'react';
import { resetPagesAndPlan } from 'Redux/Planning/planningSlice';
import useTranslation from 'Hooks/useTranslations';
import ModalFaster from './ModalsContent/ModalFaster';
import ModalDone from './ModalsContent/ModalDone';
import dayjs from 'dayjs';

export default function Results() {
	const [isShowModal, setIsShowModal] = useState(false);
	const [isShowModalEndReading, setIsShowModalEndReading] = useState(false);
	const [isdisabledBtn, setIsDisabledBtn] = useState(false);

	const readedPages = useSelector(selectorReadedPages);
	const data = useSelector(selectorPlanFact);
	const pagesFinished = useSelector(selectorPagesReaded);

	const translation = useTranslation();

	const dispatch = useDispatch();
	const dateToday = `${dayjs().get('date')}-${
		dayjs().get('month') + 1
	}-${dayjs().get('year')}`;
	useEffect(() => {
		const checkTotalPlan = () => {
			const totalReadedPages = readedPages?.reduce(
				(total, el) => total + el.pagesCount,
				0
			);

			if (data.length > 0 && data[data.length - 1].plan === totalReadedPages) {
				setIsShowModalEndReading(true);
				setIsDisabledBtn(true);
			}
		};

		checkTotalPlan();
	}, [data, dispatch, readedPages]);

	const handleFormSubmit = e => {
		e.preventDefault();
		const inputValue = Number(e.target.elements[1].value);
		const unreadPages = data[data.length - 1]?.plan - data[0]?.fact;

		if (Number.isNaN(inputValue)) {
			Notify.failure(`Enter numbers`);
			return;
		}

		if (inputValue > unreadPages) {
			return Notify.failure(
				`${translation.results.notify1part} ${unreadPages} ${translation.results.notify2part}`
			);
		}

		if (inputValue === 0) {
			return Notify.failure(`You have entered 0. Enter correct data`);
		}

		dispatch(addReadingPage({ pages: inputValue }));

		if (data[0].fact + inputValue < data[0].plan) {
			setIsShowModal(true);
		}
	};

	useEffect(() => {
		dispatch(getCurrentPlanning());
	}, [pagesFinished, dispatch]);

	const handleDoneBtnClick = () => {
		setIsShowModalEndReading(false);

		dispatch(resetPagesAndPlan());
	};

	return (
		<>
			<ResultsBox>
				<ResultsTitle>{translation.results.title}</ResultsTitle>
				<ResultsForm onSubmit={handleFormSubmit}>
					<FormBox>
						<ResultsLabel>
							{translation.results.label1}
							<ResultsInput type="text" value={dateToday} disabled />
							<CalenderResults />
						</ResultsLabel>
						<ResultsLabel>
							{translation.results.label2}
							<ResultsInput type="text" name="page" />
						</ResultsLabel>
					</FormBox>
					<ResultsBtn type="submit" disabled={isdisabledBtn}>
						{translation.results.btn}
					</ResultsBtn>
				</ResultsForm>
				<StatisticsPageBox>
					<StatisticsPageTitle>{translation.results.stat}</StatisticsPageTitle>
				</StatisticsPageBox>
				<ResultsPageList>
					{readedPages &&
						readedPages.map((el, i) => <ResultsItem key={i} data={el} />)}
				</ResultsPageList>
			</ResultsBox>
			{isShowModal && (
				<Modal onClose={() => setIsShowModal(false)}>
					<ModalFaster onClose={() => setIsShowModal(false)} />
				</Modal>
			)}
			{isShowModalEndReading && (
				<Modal
					onClose={() => setIsShowModalEndReading(false)}
					offBackdrop={isdisabledBtn}
				>
					<ModalDone onClose={handleDoneBtnClick} />
				</Modal>
			)}
		</>
	);
}
