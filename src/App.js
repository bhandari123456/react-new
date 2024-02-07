import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./component/Forms";
import Home from "./component/Home";
import Blog from "./component/Blog";
import Login from "./component/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
