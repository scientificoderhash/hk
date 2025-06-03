import { Link, Copy, Zap, Shield, BarChart3} from 'lucide-react'

function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Shorten URLs instantly with our optimized infrastructure"
    },
    {
      icon: Shield,  
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Detailed click tracking and performance insights"
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose QuickLink?</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than just a URL shortener. Get powerful features to manage and track your links.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection