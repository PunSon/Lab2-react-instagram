import './App.css'
import { seedPosts} from './data/posts'
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Composer from './components/Composer'
import Feed from './components/Feed.jsx'
import Profile from "./components/Profile";

export default function App() {
  const [posts, setPosts] = useState(seedPosts)
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Composer setPosts={setPosts} />
                <Feed posts={posts} setPosts={setPosts} />
              </>
            }
          />
          <Route
            path="/u/:handle"
            element={<Profile posts={posts} setPosts={setPosts} />}
          />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </main>
    </>
  )
}


