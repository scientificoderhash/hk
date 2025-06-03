import { useState } from 'react'
import { Zap } from 'lucide-react'

function InputForm({ setShortUrl, setIsLoading, setError }) {
  const [url, setUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!url.trim()) {
      setError('Please enter a valid URL')
      return
    }

    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch('https://hk-azfn.onrender.com/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })
      
      if (!response.ok) {
        throw new Error('Failed to shorten URL')
      }
      
      const shortUrl = await response.text()
      setShortUrl(shortUrl)
    } catch (error) {
      setError('Failed to shorten URL. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-lg border">
        <input
          type="url"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-6 py-4 text-lg rounded-xl border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e)
            }
          }}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center gap-2 justify-center min-w-[140px]"
        >
          <Zap className="w-5 h-5" />
          Shorten
        </button>
      </div>
    </div>
  )
}

export default InputForm