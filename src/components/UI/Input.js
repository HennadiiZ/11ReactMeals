import classes from './Input.module.css';
import React from 'react';

const Input = props => {
  return (
    // <div className={`${classes.input}`}>
    //     <label 
    //       className={`${classes.label}`} 
    //       htmlFor={props.id}
    //     > 
    //       {props.label} 
    //     </label>
    //     <input id={props.id}/>
    // </div>

    <div className={`${classes.input}`}>
        <label 
          className={`${classes.label}`} 
          htmlFor={props.input.id}
        > 
          {props.label} 
        </label>
        <input id={props.input.id} {...props.input}/>
    </div>
  );
};

export default Input;