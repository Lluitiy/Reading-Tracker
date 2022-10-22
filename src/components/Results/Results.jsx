// // !============Tanya==========
import Modal from 'components/Modal';
import ResultsItem from 'components/Results/ResultsItem/ResultsItem';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import { addReadingPage } from 'Redux/Planning/planningOperations';
import {
	selectorPlanFact,
	selectorReadedPages,
} from 'Redux/Planning/planningSelectors';
import { ReactComponent as Okey } from 'Assets/svg/okey.svg';
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
	ModalText,
	ModalBox,
	ResultsBackBtn,
	BtnBox,
	ResultsPageList,
} from './Results.styled';
import { useEffect } from 'react';
import { resetPagesAndPlan } from 'Redux/Planning/planningSlice';

export default function Results() {
	const [isShowModal, setIsShowModal] = useState(false);
	const [isShowModalEndReading, setIsShowModalEndReading] = useState(false);
	const readedPages = useSelector(selectorReadedPages);
	const data = useSelector(selectorPlanFact);
	const navigate = useNavigate();

	//зато работает!
	const date = new Date();
	const normalDate = date.toLocaleDateString();
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = [...normalDate];
	const realDay = day[0] + day[1];

	// !============Tanya==========
	const dispatch = useDispatch();

	useEffect(() => {
		const checkTotalPlan = () => {
			const totalReadedPages = readedPages?.reduce(
				(total, el) => total + el.pagesCount,
				0
         );
         if (data.length > 0 && data[data.length - 1].plan === totalReadedPages) {
            
				setIsShowModalEndReading(true);
			
         }
			
		};

		checkTotalPlan();
	}, [data, readedPages]);

	const handleFormSubmit = e => {
		e.preventDefault();
		// !== Лера здесь нужен намбер
		dispatch(addReadingPage({ pages: Number(e.target.elements[1].value) }));

		if (data[0].fact + Number(e.target.elements[1].value) < data[0].plan) {
			setIsShowModal(true);
		}
	};
	// !============================

   const handleDoneBtnClick = () => {
      
      setIsShowModalEndReading(false);
     
		dispatch(resetPagesAndPlan());
		// navigate('/library');
	};

	return (
		<>
			<ResultsBox>
				<ResultsTitle>Results</ResultsTitle>
				<ResultsForm onSubmit={handleFormSubmit}>
					<FormBox>
						<ResultsLabel>
							Date
							<ResultsInput
								type="date"
								name="date"
								min={`${year}-${month}-${realDay}`}
								max={`${year}-${month}-${realDay}`}
							/>
						</ResultsLabel>
						<ResultsLabel>
							Amount of pages
							<ResultsInput type="text" name="page" />
						</ResultsLabel>
					</FormBox>
					<ResultsBtn type="submit">Add result</ResultsBtn>
				</ResultsForm>
				<StatisticsPageBox>
					<StatisticsPageTitle>Statistics</StatisticsPageTitle>
				</StatisticsPageBox>
				<ResultsPageList>
					{readedPages &&
						readedPages.map((el, i) => <ResultsItem key={i} data={el} />)}
				</ResultsPageList>
			</ResultsBox>
			{isShowModal && (
				<Modal onClose={() => setIsShowModal(false)}>
					<ModalBox>
						<Okey />
						<ModalText>
							Well done! but you need to be a little bit faster. You can do it
						</ModalText>

						<BtnBox>
							<ResultsBtn type="button" onClick={() => navigate('/library')}>
								New training
							</ResultsBtn>
							<ResultsBackBtn
								type="button"
								onClick={() => setIsShowModal(false)}
							>
								Back
							</ResultsBackBtn>
						</BtnBox>
					</ModalBox>
				</Modal>
			)}
			{isShowModalEndReading && (
				<Modal onClose={() => setIsShowModalEndReading(false)}>
					<ModalBox>
						{/* <IconWrapper> */}
						<Okey />
						{/* </IconWrapper> */}
						<ModalText>Congratulations!Another book read.</ModalText>

						<BtnBox>
							<ResultsBtn type="button" onClick={handleDoneBtnClick}>
								Done
							</ResultsBtn>
						</BtnBox>
					</ModalBox>
				</Modal>
			)}
		</>
	);
}
