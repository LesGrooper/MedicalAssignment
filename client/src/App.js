import { React } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { MenuContent, NavbarContent } from "./components";

function App() {
  return (
    <>
      <div className="container-fluid">
        <NavbarContent/>
        <MenuContent />
      </div>
    </>
  );
}

export default App;
