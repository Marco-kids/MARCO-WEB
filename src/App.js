import React from "react";
import { Navigate } from "react-router";
//import Home from "./views/Home"
import Home from "./views/Home"
import Table from "./views/Table"
import Add from "./views/Add"

import { Routes, Route } from "react-router-dom";
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";*/

function App() {

  return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="table" element={<Table/>}></Route>
          <Route path="add" element={<Add/>}></Route>
        </Route>
        {/*<Route path="table" element={<Table/>}></Route>*/}
      </Routes>
      </>
  );
}

export default App;
