import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'

function Home() {
  const services = [
    {
      id: 'flights',
      icon: '✈️',
      title: 'Flights',
      description: 'Book flights to your destination',
      enabled: false,
      href: '/flights'
    },
    {
      id: 'cars',
      icon: '🚗',
      title: 'Car Rental',
      description: 'Reserve a car for your trip',
      enabled: true,
      href: '/cars'
    },
    {
      id: 'hotels',
      icon: '🏨',
      title: 'Hotels',
      description: 'Find and book accommodation',
      enabled: false,
      href: '/hotels'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Welcome to Travel Naja
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Your all-in-one travel companion for flights, cars, and accommodations
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                service.enabled 
                  ? 'hover:shadow-lg hover:border-primary cursor-pointer' 
                  : 'opacity-60 cursor-not-allowed'
              }`}
            >
              {!service.enabled && (
                <div className="absolute inset-0 bg-black/30 z-10" />
              )}
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-5xl mb-2">{service.icon}</div>
                  {!service.enabled && (
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      Coming Soon
                    </Badge>
                  )}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {service.enabled ? (
                  <Button className="w-full" asChild>
                    <Link to={service.href}>
                      Explore {service.title}
                    </Link>
                  </Button>
                ) : (
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Travel Naja?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '⚡', title: 'Fast Booking', desc: 'Quick and easy reservation process' },
            { icon: '🛡️', title: 'Secure', desc: 'Your data is protected with encryption' },
            { icon: '💰', title: 'Best Prices', desc: 'Competitive rates on all services' }
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
