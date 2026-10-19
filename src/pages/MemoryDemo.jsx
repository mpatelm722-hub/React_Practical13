
import {
  MemoryRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function MemoryDemo() {
  return (
    <MemoryRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <p className="mt-5 bg-indigo-50 p-3 rounded-lg">
        MemoryRouter changes pages without changing the URL.
      </p>
    </MemoryRouter>
  )
}

export default MemoryDemo
