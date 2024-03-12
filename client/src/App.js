import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import GreenwichNavBar from "./global/Navbar";
import Sidebar from "./global/Sidebar";
import AuthService from "./services/auth.service";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Router>
      <div className="App">
        <GreenwichNavBar currentUser={currentUser} logOut={logOut} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Sidebar />
        <main className="content"></main>
      </div>
    </Router>
  );
}

export default App;
