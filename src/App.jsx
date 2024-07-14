import {BrowserRouter as Router, Route} from "react-router-dom";
import { Link, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Order from "./components/order.jsx";
import Home from "./components/home.jsx";
import OrderApproval from "./components/orderapproval.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/orderapproval">
              <OrderApproval component={OrderApproval}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App
