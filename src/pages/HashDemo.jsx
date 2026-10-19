
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function HashDemo() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <p className="mt-5 bg-indigo-50 p-3 rounded-lg">
        HashRouter changes the URL after the # symbol.
      </p>
    </HashRouter>
  )
}

export default HashDemo
