import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop-page/shop-page.component'
function App() {
  return (
    <div className="App">
      <HomePage/>
      <ShopPage/>
    </div>
  );
}

export default App;
