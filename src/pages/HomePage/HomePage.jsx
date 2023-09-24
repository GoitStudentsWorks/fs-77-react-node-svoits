import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DrinksCategory } from '../../components/DrinksCategory/DrinksCategory';
import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';
import { useDrink } from '../../redux/hooks/useDrink';  
import { useAuth } from '../../redux/hooks/useAuth';  
import Loader from '../../components/Loader'


export default function HomePage() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const { isLoading, error } = useDrink();

  useEffect(() => {
     
    if(isLoggedIn) dispatch(getMainPageAllDrinks());
  
  
  }, [dispatch, isLoggedIn]);

  return ( 
    <>
    { isLoading &&  <Loader />}
    { error &&
      <p>
        { error }
      </p>
    } 
      <div>FirstBlock</div>
      <DrinksCategory/>
    </>
  )
}
