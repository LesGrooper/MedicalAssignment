import { React } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { MenuContent, NavbarContent } from "./components";

function App() {
  return (
    <>
      <div className="container-fluid">
        {/* <Login> */}
        <NavbarContent/>
        <MenuContent />
        {/* </Login> */}
      </div>
    </>
  );
}

export default App;
