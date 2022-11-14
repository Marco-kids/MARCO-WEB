import React from "react";
import { Navigate } from "react-router";
//import Home from "./views/Home"
import Home from "./components/TopMenu"
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
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home/>}></Route>
      </Routes>
      </>
  );
}

export default App;
