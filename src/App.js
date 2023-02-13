import './App.css';
import { Navbar } from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Ques } from './components/ques-section';
import { Post } from './components/posts';
import { Notifications } from './components/notifications';
import { Answer } from './components/answer';
import { Followings } from './components/followings';
import { Home } from './components/home';

function App() {
  return (
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/ques" element={<Ques></Ques>} />
          <Route path="/posts" element={<Post></Post>} />
          <Route path="/notifications" element={<Notifications></Notifications>} />
          <Route path="/answer" element={<Answer></Answer>} />
          <Route path="/followings" element={<Followings></Followings>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;