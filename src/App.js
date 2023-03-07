import "./App.css";
import NavBar from "./Navbar";
import Search from "./search";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="dashColor">
        <div className="dashboard ">Dashboard</div>
        <Search/>
        <NavBar/>
      </div>
    </Fragment>
  );
}

export default App;
