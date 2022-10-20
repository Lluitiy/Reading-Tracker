
import { ResultsBox, ResultsTitle, ResultsForm, FormBox, ResultsLabel, ResultsInput, ResultsBtn, StatisticsPageBox, StatisticsPageTitle } from './Results.styled'

export default function Results() {

   //зато работает!
   const date = new Date();
   const normalDate = date.toLocaleDateString();
   const year = String(date.getFullYear());
   const month = String(date.getMonth() + 1);
   const day = [...normalDate];
   const realDay = day[0] + day[1];



   return (
      <ResultsBox>
         <ResultsTitle>Results</ResultsTitle>
         <ResultsForm>
            <FormBox>
               <ResultsLabel>
               Date
                  <ResultsInput type="date" name="date" min={`${year}-${month}-${realDay}`} />
            </ResultsLabel>
            <ResultsLabel>
               Amount of pages
                  <ResultsInput type="text" name="page" />
            </ResultsLabel>
            </FormBox>
            <ResultsBtn type='submit'>Add result</ResultsBtn>
         </ResultsForm>
         <StatisticsPageBox>
            <StatisticsPageTitle>Statistics</StatisticsPageTitle>
         </StatisticsPageBox>
      </ResultsBox>
   )
 }