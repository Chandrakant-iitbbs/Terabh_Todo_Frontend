import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <>
        <Router>
          <div className="container">
            <Routes>
              <Route exact path="/login" element={<Login  />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
    </>
  );
}
export default App;
