import { useState } from 'react';
import Loader from '../../components/Loader';
import Paginator from '../../components/Paginator/Paginator';
import { Container } from '../../components/Container/Container.styled';
import { useDrink } from '../../redux/hooks/useDrink';
import { useResize } from '../../hooks/useResize';

import { SearchDrinks } from 'components/SearchDrinks/SearchDrinks';
<<<<<<< Updated upstream
import { AllDrinksList } from '../../components/AllDrinksList/AllDrinksList';

import PageTitle from '../../components/PageTitle/PageTitle';
import {
   DrinksPageContainer,
   DefaultImageContainer,
   DefaultDescr,
   DefaultImage,
 } from './DrinksPage.styled';
import CocktailImage from '../../images/heroImage/hero-img-desc-2x.png';
=======
import { DrinksPageContainer } from './DrinksPage.styled';
import { useResize } from '../../hooks/useResize';
import PageTitle from '../../components/PageTitle/PageTitle';
import { 
  AllDrinksList,
  DefaultImageContainer,
  DefaultDescr,
  DefaultImage,
 } from '../../components/AllDrinksList/AllDrinksList';
>>>>>>> Stashed changes
// import { toast } from 'react-toastify';
import CocktailImage from '../../images/heroImage/hero-img-desc-2x.png';

export default function DrinksPage() {
  const { width } = useResize();
  const { isLoading, drinks, error, total } = useDrink();
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = width < 768 ? 5 : 8;
  const itemsPerPage = width < 1440 ? 10 : 9;
  const totalPages = Math.ceil(total / itemsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <DrinksPageContainer>
      <Container>
        <PageTitle title="Drinks" />
        <SearchDrinks page={currentPage} limit={itemsPerPage} />
        {/* <DrinksListPage /> */}

        {isLoading && <Loader />}
        {total > 0 && !error && <AllDrinksList drinks={drinks} />}
        {/* {error &&  <p>Sorry. There are no cocktails ... 😭</p>} */}
<<<<<<< Updated upstream
        {error &&  (
         <DefaultImageContainer>
         <DefaultImage src={CocktailImage} alt="Cocktail" />
         <DefaultDescr>Sorry. There are no cocktails ... 😭Please try again.</DefaultDescr>
         </DefaultImageContainer> 
        )}
=======
        {error &&  
         <DefaultImageContainer>
         <DefaultImage src={CocktailImage} alt="Cocktail" />
         <DefaultDescr>You have not added any cocktails yet</DefaultDescr>
         </DefaultImageContainer> 
        }
>>>>>>> Stashed changes
        {totalPages > 1 && (
          <Paginator
            currentPage={currentPage}
            drinksPerPage={itemsPerPage}
            totalDrinks={total}
            onPageChange={onPageChange}
            pageNumbersToShow={pageNumbersToShow}
          />
        )}
      </Container>
    </DrinksPageContainer>
  );
}
