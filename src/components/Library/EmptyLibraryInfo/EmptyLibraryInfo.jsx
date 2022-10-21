import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { ReactComponent as VectorIcon } from 'Assets/svg/vector.svg';
import { ReactComponent as FlagIcon } from 'Assets/svg/flag.svg';
import { theme } from 'components/Constants/theme';
import { Guide, OkBtn, SubTitle, Title, Wrapper } from './EmptyLibraryInfo.styled';


const EmptyLibraryInfo = () => {

    return (
        <Wrapper>
            <ul>
                <li>
                    <Title>Step 1.</Title>
                    <SubTitle><BookIcon style={{marginRight: 5}} fill={theme.colors.textSecondary} /> Create your own library</SubTitle>
                    <Guide><VectorIcon style={{marginRight: 5}}/> Add there books which you are going to read.</Guide>
                </li>
                <li>
                    <Title>Step 2.</Title>
                    <SubTitle><FlagIcon style={{ marginRight: 5 }} /> Create your first training</SubTitle>
                    <Guide><VectorIcon style={{marginRight: 5}}/> Set a goal, choose period, start training.</Guide>
                </li>
            </ul>
            <OkBtn type='button'>Ok</OkBtn>
        </Wrapper>
    )
}

export default EmptyLibraryInfo