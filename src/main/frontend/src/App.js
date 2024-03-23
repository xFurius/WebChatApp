import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<SignUp />} path='/signUp'/>
          <Route element={<SignIn />} path='/signIn'/>
          <Route path="*" element={<h1>def</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
