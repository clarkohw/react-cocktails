import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Search from './components/Search';
import DrinkPage from './components/DrinkPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/drink/:id" exact component={DrinkPage} />
      </Switch>
    </Router >
  );
}

export default App;
