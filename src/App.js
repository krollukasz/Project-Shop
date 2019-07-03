import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { library } from  "@fortawesome/fontawesome-svg-core";
import { fab } from  "@fortawesome/free-brands-svg-icons";
import { fas } from  "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from  "@fortawesome/free-solid-svg-icons";

// Import styles
import "./App.scss";

// Import components
import { Layout } from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Faq from "./components/FAQ/Faq";
import Regulations from "./components/Regulations/Regulations";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Product from "./components/Product/ProductItem";
import Basket from "./components/Basket/Basket";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/home'} component={Home} />
            <Route exact path={"/faq"} component={Faq} />
            <Route exact path={"/regulations"} component={Regulations} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/basket"} component={Basket} />
            <Route exact path={"/product/:id"} component={Product} />
            <Route path="/404" component={NotFound} />
              <Redirect from="*" to="/404" />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

library.add(fab, fas, faShoppingBag)
export default App;
