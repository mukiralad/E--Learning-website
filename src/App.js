import "./App.css";
import Landing from "./components/Landing";
import CourseStructure from "./components/CourseStructure";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Auth";
import SignInSide from "./components/SignInSide";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<SignInSide />} />
            <Route exact path="/home" element={<Landing />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route path="/:courseRoute" element={<CourseStructure />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

// "start": "react-scripts start",
