import { useState } from 'react'
import Header from './Components/Header'
import HeroSection from './Components/Hero'
import InputForm from './Components/InputForm'
import OutputForm from './Components/OutputForm'
import FeaturesSection from './Components/FeatureSection'
import Footer from './Components/Footer'

function App() {
  const [shortUrl, setShortUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main>
        <HeroSection />
        
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <InputForm 
              setShortUrl={setShortUrl} 
              setIsLoading={setIsLoading}
              setError={setError}
            />
            <OutputForm
              shortUrl={shortUrl} 
              isLoading={isLoading}
              error={error}
            />
          </div>
        </section>
        
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
