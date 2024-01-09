import "./App.css"
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import Error404 from "./components/Error404";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route path="user/:id" element={<User />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;