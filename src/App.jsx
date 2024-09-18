import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">HOMEPAGE</Link>
          </li>
          <li>
            <Link to="/post">Post Page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
