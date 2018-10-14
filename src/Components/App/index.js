import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Header";
import Main from "../Main";
import Profile from "../Profile";
import Login from "../Login";

/** HashRouter = Switch
 *  Match = Route
 *  pattern = path
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        photoUrl: "https://avatars3.githubusercontent.com/u/28812706?s=40&v=4",
        email: "sebastian.martha@sngular.team",
        displayName: "Sebastian Martha",
        location: "CDMX, México"
      }
    };
  }

  handleOnAuth = () => {
    console.log("handleOnAuth");
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
                user ? (
                  <Main user={user} />
                ) : (
                  <Login onAuth={this.handleOnAuth} />
                )
              }
            />

            <Route
              path="/profile"
              render={() => (
                <Profile
                  picture={user.photoUrl}
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
