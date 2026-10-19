
import { useState } from 'react'

import HashDemo from './pages/HashDemo'
import MemoryDemo from './pages/MemoryDemo'
import StaticDemo from './pages/StaticDemo'

function App() {
  const [router, setRouter] = useState('hash')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100">
      <nav className="bg-slate-900 text-white p-6">
        <h1 className="text-3xl font-bold">
          React Router Demo
        </h1>
        <p className="text-slate-300 mt-2">
          HashRouter | MemoryRouter | StaticRouter
        </p>
      </nav>

      <main className="max-w-4xl mx-auto p-5 md:p-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-5">
            Select a Router
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <button
              onClick={() => setRouter('hash')}
              className={`p-3 rounded-lg font-semibold ${
                router === 'hash'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100'
              }`}
            >
              HashRouter
            </button>

            <button
              onClick={() => setRouter('memory')}
              className={`p-3 rounded-lg font-semibold ${
                router === 'memory'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100'
              }`}
            >
              MemoryRouter
            </button>

            <button
              onClick={() => setRouter('static')}
              className={`p-3 rounded-lg font-semibold ${
                router === 'static'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100'
              }`}
            >
              StaticRouter
            </button>
          </div>

          {router === 'hash' && <HashDemo />}
          {router === 'memory' && <MemoryDemo />}
          {router === 'static' && <StaticDemo />}
        </div>

        <p className="text-center text-gray-600 mt-6">
          React JS Practical
        </p>
      </main>
    </div>
  )
}

export default App
