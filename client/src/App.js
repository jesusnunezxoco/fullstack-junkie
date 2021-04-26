import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar"
import Backdrop from "./components/Backdrop"
// PAGES
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="app">
        {/* NAVBAR */}
        <Navbar/>
        {/* SideDrawer */}
        <Backdrop/>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products/" component={Products} />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
