import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import Header from './components/header/header';
import SIgnIn from './components/sign-in/sign-in';

function App() {

  return (
    <div >
      <Header/>
        <Routes>
         <Route exact path='/' element={<HomePage/>}/>
         <Route exact path='shop' element={<ShopPage/>}/>
         <Route exact path='signin' element={<SIgnIn/>}/>
        </Routes>

    </div>
  );
}



export default App;
