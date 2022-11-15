import logo from './logo.svg';
import './App.css';
import { Header } from './comp/Header';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import {Sale} from './comp/sale' 
import { Main } from './comp/Main';
import { Provider } from 'react-redux';
import {store} from './comp/store';
import { ModalContainer } from './comp/Modal/ModalCont';
import { Login } from './comp/login';
import { Profile } from './comp/profile';
import { Men } from './comp/men';
import { Women } from './comp/women';
import { Registration } from './comp/registrtation';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <ModalContainer/>
      <Routes>
          <Route path='' element={<><Sale></Sale><Main></Main></>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/men' element={<Men/>}></Route>
          <Route path='/women' element={<Women/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
