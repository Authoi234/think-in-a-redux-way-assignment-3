import { Provider } from 'react-redux';
import './App.css';
import MainCompo from './components/Main/MainCompo';
import Navbar from './components/Navbar';
import './css/output.css';
import store from './redux/store';
import CartCompo from './components/Main/cart/CartCompo';
import { useState } from 'react';

function App() {
  const [isCartPage, setIsCartPage] = useState(false);
  return (
    <>
      <Provider store={store}>
        <Navbar setIsCartPage={setIsCartPage} />
        {!isCartPage ? <div>
          <MainCompo />
        </div> :
        <div>
          <CartCompo></CartCompo>
        </div>}
      </Provider>
    </>
  );
}

export default App;
