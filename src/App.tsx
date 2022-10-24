import "./App.css";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./pages/test/main";
import UserContext from "./contexts/UserContext";

const App = () => {
  const [user, setUser] = useState<any>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<Main />} />

        </Routes>
      </Router>
    </UserContext.Provider>
  );
};
export default App;
