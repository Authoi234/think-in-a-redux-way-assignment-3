import { Provider } from 'react-redux';
import './App.css';
import MainCompo from './components/Main/MainCompo';
import Navbar from './components/Navbar';
import './css/output.css';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>  
        <div>
          <Navbar />
          <MainCompo />
        </div>
      </Provider>
    </>
  );
}

export default App;
