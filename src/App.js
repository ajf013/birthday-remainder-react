import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Empdetails from "./components/Empdetails";
import Empbirthday from "./components/Empbirthday";
import Error from "./components/Error";
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/empdetails" component={Empdetails} exact />
      <Route path="/empbirthday" component={Empbirthday} exact />
      <Route component={Error} />
    </Switch>
    <Footer />  
    </Router>
  );
};

export default App;
