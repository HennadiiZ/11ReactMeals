import { Fragment } from 'react';
import MealsSummary from './MealSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </>
    )
};

export default Meals;