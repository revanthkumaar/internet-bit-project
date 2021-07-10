import "./App.css";
import HomePage from "./pages/home-page-component/home-page.component";
import SignInPage from "./pages/signin-page-component/signin-page.component";
import { Route } from "react-router-dom";
import CartPage from "./pages/cart-page-component/cart-page-component";
import Header from "./components/header/header.component";


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route path="/signin/cart" component={CartPage} />
      <Route path="/hats" component={SignInPage} />
      <Route path="/checkout" component={CheckOutPage} />
    </div>
  );
}

export default App;
