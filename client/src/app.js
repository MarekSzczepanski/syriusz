import React from "react";
import { HashRouter } from "react-router-dom";
import Page from "./components/page";

class App extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <Page />
        </HashRouter>
      </>
    );
  }
}
export default App;
