export const getBooks = state => state.planning.books;
export const booksId = state => state.planning.booksId;
export const startDate = state => state.planning.startDate;
export const endDate = state => state.planning.startDate;
export const selectorShowBtn = state => state.planning.isShowStartTraningBtn;
export const selectorPlanFact = state => state.planning.planFact;
export const getIsLoadingPlanning = state => state.planning.isLoading;
export const selectorDuration = state => state.planning.duration;
export const selectorPagesPerDay = state => state.planning.pagesPerDay;
export const selectorReadedPages = state => state.planning.readedPages;
export const selectorPagesReaded = state => state.planning.pagesReaded;

//!!______________________________________________________________________
export const showResultsSection = state => state.planning.isShowResults;
export const selectorShowResults = state => state.planning.isShowResults;
