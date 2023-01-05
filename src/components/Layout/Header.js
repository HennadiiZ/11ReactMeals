import classes from './Header.module.css';
import { Fragment } from 'react';

import mealImage from '../../assets/meal.jpeg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={`${classes.header}`}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={`${classes['main-image']}`}>
        <img src={mealImage}/> 
      </div>
    </Fragment>
  )
};

export default Header;