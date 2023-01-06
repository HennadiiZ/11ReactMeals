import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    console.log(123);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
    console.log(456);
  };

  return (
    // <React.Fragment>
    //   <Cart />
    //   <Header />
    //   <main>
    //     <Meals />
    //   </main>
    // </React.Fragment>

    <React.Fragment>
      {/* <Cart onClickOpen={showCartHandler} onClickClose={closeCartHandler}/> */}
      {/* {<Cart onShowCart={showCartHandler} onClickClose={hideCartHandler}/> && cartIsShown} */}
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
