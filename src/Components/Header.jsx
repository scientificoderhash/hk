import { Link} from 'lucide-react'

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Link className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">QuickLink</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header