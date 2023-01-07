import React from 'react';
import classes from './Input.module.css';


// const Input = props => {
//   return (
//     <div className={`${classes.input}`}>
//         <label 
//           className={`${classes.label}`} 
//           htmlFor={props.input.id}
//         > 
//           {props.label} 
//         </label>
//         <input id={props.input.id} {...props.input}/>
//     </div>
//   );
// };

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${classes.input}`}>
        <label 
          className={`${classes.label}`} 
          htmlFor={props.input.id}
        > 
          {props.label} 
        </label>
        {/* <input ref={ref} id={props.input.id} {...props.input}/> */}
        <input ref={ref} {...props.input}/>
    </div>
  );
});

export default Input;