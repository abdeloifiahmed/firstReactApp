import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import NotFound from "./components/layout/NotFound";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
