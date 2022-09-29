import Home from "./components/home";
import "./App.css";
import "./components/mainContent.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import {useEffect} from "react";
import axios from "axios"

function App() {
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
"https://jsonplaceholder.typicode.com/todos")
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    })()
  })
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;