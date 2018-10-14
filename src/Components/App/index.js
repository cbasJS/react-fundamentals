import React, { Component } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        photoUrl: "https://avatars3.githubusercontent.com/u/28812706?s=40&v=4",
        email: "sebastian.martha@sngular.team",
        displayName: "Sebastian Martha"
      }
    };
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <Header />
        <Main user={this.state.user} />
        <Footer />
      </div>
    );
  }
}

export default App;
