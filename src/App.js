import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import Practice from "./routes/Practice.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/practice/:love" element={<Practice />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
