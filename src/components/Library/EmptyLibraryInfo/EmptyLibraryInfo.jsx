import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { ReactComponent as VectorIcon } from 'Assets/svg/vector.svg';
import { ReactComponent as FlagIcon } from 'Assets/svg/flag.svg';
import {
	Guide,
	OkBtn,
	SubTitle,
	Title,
	Wrapper,
} from './EmptyLibraryInfo.styled';
import useTranslation from 'Hooks/useTranslations';

const EmptyLibraryInfo = ({ openFormHandler = null }) => {
	const translation = useTranslation();
	return (
		<Wrapper>
			<ul>
				<li>
					<Title>{translation.libraryEmpty.step1}</Title>
					<SubTitle>
						<BookIcon style={{ marginRight: 5 }} fill={'#FF6B08'} />
						{translation.libraryEmpty.text1}
					</SubTitle>
					<Guide>
						<VectorIcon style={{ marginRight: 5 }} />
						{translation.libraryEmpty.text2}
					</Guide>
				</li>
				<li>
					<Title>{translation.libraryEmpty.step2}</Title>
					<SubTitle>
						<FlagIcon style={{ marginRight: 5 }} />
						{translation.libraryEmpty.text3}
					</SubTitle>
					<Guide>
						<VectorIcon style={{ marginRight: 5 }} />
						{translation.libraryEmpty.text4}
					</Guide>
				</li>
			</ul>
			<OkBtn onClick={openFormHandler} type="button">
				{translation.libraryEmpty.btn}
			</OkBtn>
		</Wrapper>
	);
};

export default EmptyLibraryInfo;
