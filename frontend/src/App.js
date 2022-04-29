import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/index.js";
import LoginPage from "./components/views/LoginPage/index.js";
import RegisterPage from "./components/views/RegisterPage/index.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <hr />

          {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;