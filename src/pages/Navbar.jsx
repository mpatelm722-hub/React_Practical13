
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <Link
        to="/"
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
      >
        About
      </Link>

      <Link
        to="/contact"
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
      >
        Contact
      </Link>
    </div>
  )
}

export default Navbar
