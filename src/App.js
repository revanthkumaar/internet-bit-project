import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop-page/shop-page.component'
//attaching application with router
import {Switch, Route} from 'react-router-dom'
import Book from './components/books/createBook'

function App() {
  return (
    <div className="App">

      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
     
            <Route path='/bookpage' component={Book}/>

    </div>
  );
}

export default App;
