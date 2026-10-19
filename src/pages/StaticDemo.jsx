
import {
  Routes,
  Route
} from 'react-router-dom'

import { StaticRouter } from 'react-router'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function StaticDemo() {
  return (
    <StaticRouter location="/about">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <p className="mt-5 bg-purple-50 p-3 rounded-lg">
        StaticRouter renders the route for a fixed location.
      </p>
    </StaticRouter>
  )
}

export default StaticDemo
