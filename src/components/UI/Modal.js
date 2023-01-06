import classes from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={`${classes.backdrop}`} />
};

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal}`}> 
      <div className={`${classes.content}`}>{props.children}</div>
    </div>
  )
};

const overlays = document.getElementById('overlays');

const Modal = (props) => {
  return (
    // <React.Fragment>
    //   <Backdrop />
    //   <ModalOverlay>{props.children}</ModalOverlay>
    // </React.Fragment>
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, overlays)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlays)}
    </React.Fragment>
  )
};

export default Modal;