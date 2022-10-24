import { useSelector } from 'react-redux';
import { getIsLightTheme } from 'Redux/Theme/themeSelectors';

const useToggleTheme = () => useSelector(getIsLightTheme);

export default useToggleTheme;
