const { useSelector } = require('react-redux');
const { getIsLightTheme } = require('Redux/Theme/themeSelectors');

const useToggleTheme = () => useSelector(getIsLightTheme);

export default useToggleTheme;
