import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<SignUp />} path='/signUp'/>
          <Route path="*" element={<h1>def</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
