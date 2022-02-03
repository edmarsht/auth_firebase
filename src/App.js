import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Private from "./pages/private/Private";
import PrivateHome from "./pages/private/privateHome/PrivateHome";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup/private" element={<Private />}>
          <Route path="/signup/private/private-home" element={<PrivateHome/>} />
        </Route>
        <Route path="/signin/private" element={<Private />}>
          <Route path="/signin/private/private-home" element={<PrivateHome/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
