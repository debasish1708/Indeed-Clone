

import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routePath } from "./Routes/route";
import AllPosts from "./Pages/AllPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home/>} />
        <Route path={routePath.create} element={<CreatePost/>} />
        <Route path={routePath.posts} element={<AllPosts/>} />
      </Routes>
    </Router>
  );
}

export default App;
