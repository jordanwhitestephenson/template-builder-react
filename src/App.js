/* global React ReactDOM */

import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Results from "./components/Results";

// import pf from 'petfinder-client';

// const petfinder = pf({
//   key: 'b05b18f4be08bfbcea5f559c4fe55a15',
//   secret: '55da120b3310511ef1ac985a9965e621'
// });

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Results />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
