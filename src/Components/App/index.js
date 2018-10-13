import React, { Component } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
