import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Home/Login/Login";
import Registration from "./components/Home/Registration/Registration";
import Welcome from "./components/Home/Welcome/Welcome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
