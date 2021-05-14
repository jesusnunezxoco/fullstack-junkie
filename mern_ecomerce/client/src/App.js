import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
// PAGES
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shopping from "./pages/Shopping";
import Cart from "./pages/Cart";



function App() {
  const [sideToggle, setSideToggle] = useState(false) 
  const handleToggle = () => setSideToggle(!sideToggle)
  return (
    <Router>
      <div className="app">
        <Navbar handleToggle={handleToggle}/>
        <SideDrawer show={sideToggle} handleToggle={handleToggle}/>
        <Backdrop show={sideToggle} handleToggle={handleToggle}/>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shopping" component={Shopping} />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
