import classes from './MealItem.module.css';
import React from 'react';
import Card from '../../UI/Card';
import  MealItemForm from '../MealItem/MealItemForm';

const MealItem = props => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    // <React.Fragment></React.Fragment>
    // <Card>
      <li className={`${classes.meal}`}>
        <div>
          <h3>{props.name}</h3>
          <div className={`${classes.description}`}>{props.description}</div>
          <div className={`${classes.price}`}>{price}</div>
        </div>
        <div>
          < MealItemForm />
        </div>
      </li>
    // </Card>
  );
}

export default MealItem;