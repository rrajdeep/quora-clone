import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Space } from './components/spaces';
import { Ques } from './components/ques-section';
import { Post } from './components/posts';
import { SpacesToFollow } from './components/spaces-to-follow';
import { Home } from './Home';
import { Notifications } from './components/notifications';

function App() {
  return (
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      {/* <Home /> */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/ques" element={<Ques></Ques>} />
          <Route path="/posts" element={<Post></Post>} />
          <Route path="/spaces-to-follow" element={<SpacesToFollow></SpacesToFollow>} />
          <Route path="/notifications" element={<Notifications></Notifications>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;