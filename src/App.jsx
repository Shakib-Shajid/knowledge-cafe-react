
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  )
}

export default App
