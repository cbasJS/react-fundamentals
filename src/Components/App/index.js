import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Header";
import Main from "../Main";
import Profile from "../Profile";
import Login from "../Login";

import firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  //Sirve para aplicaciones isomorficas
  //se ejecuta una vez que renderiza el DOM
  UNSAFE_componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      user ? this.setState({ user }) : this.setState({ user: null });
    });
  }

  handleOnAuth = () => {
    const provider = new firebase.auth.GithubAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.error(`Error: ${error.code}: ${error.message}`));
  };

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("deslogueado correctamente"))
      .catch(() => console.error("ocurrio un error"));
  };

  render() {
    const { user } = this.state;
    return (
      <Router>
        <div>
          <CssBaseline />
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                !user ? (
                  <Login onAuth={this.handleOnAuth} />
                ) : (
                  <Main user={user} onLogout={this.handleLogout} />
                )
              }
            />

            <Route
              path="/profile"
              render={() => (
                <Profile
                  picture={user.photoURL}
                  displayName={user.displayName}
                  username={user.email.split("@")[0]}
                  emailAddress={user.email}
                  location={user.location}
                />
              )}
            />

            <Route
              path="/user/:username"
              render={({ match: { params } }) => (
                <Profile
                  displayName={params.username}
                  username={params.username}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
