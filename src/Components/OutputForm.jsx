import { useState } from 'react'
import { Copy, CheckCircle } from 'lucide-react'

function OutputForm({ shortUrl, isLoading, error }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = shortUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (isLoading) {
    return (
      <div className="mt-8 flex justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-2xl w-full text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Shortening your URL...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-8 flex justify-center">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-lg max-w-2xl w-full text-center">
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    )
  }

  if (shortUrl) {
    return (
      <div className="mt-8 flex justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-2xl w-full">
          <div className="text-center mb-6">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Your link is ready!</h3>
            <p className="text-gray-600">Share it anywhere you want</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Shortened URL:</p>
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-lg break-all"
              >
                {shortUrl}
              </a>
            </div>
            <button
              onClick={copyToClipboard}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors flex items-center gap-2 shrink-0"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default OutputForm