import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  return (
    <form className={`${classes.form}`}>
      {/* <input /> */}
      {/* <Input id={'input'} label={'Search'} /> */}
      {/* <Input input={{id: 'input', label:'Search'}} /> */}
      <Input label="Amount" 
        input={{
          id: 'amount', 
          type: 'number', 
          min: '1', 
          max: '5',
          step: '1',
          defaultValue: '1'
        }
      } />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;