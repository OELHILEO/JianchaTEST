import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

function Cars() {
  const [cars, setCars] = useState([])
  const [form, setForm] = useState({ pickup_date: '', return_date: '' })
  const [selectedCar, setSelectedCar] = useState(null)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/cars').then(res => setCars(res.data))
  }, [])

  const handleBook = async (carId) => {
    if (!localStorage.getItem('token')) return navigate('/login')
    try {
      const res = await api.post('/bookings', { car_id: carId, ...form })
      setMessage(`Booking confirmed! Total: ฿${res.data.total_price}`)
      setSelectedCar(null)
    } catch (err) {
      setMessage(err.response?.data?.message || 'Booking failed')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Available Cars</h1>
        <p className="text-muted-foreground mb-8">Select a car and choose your rental dates</p>

        {message && (
          <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary text-primary">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map(car => (
            <Card key={car.id} className="overflow-hidden hover:border-primary transition">
              <div className="h-40 bg-muted flex items-center justify-center text-4xl">
                🚗
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">
                  {car.brand} {car.model}
                </CardTitle>
                <CardDescription>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>Type: {car.type}</p>
                    <p>Location: {car.location}</p>
                    <p className="font-semibold text-primary">฿{car.price_per_day}/day</p>
                  </div>
                </CardDescription>
              </CardHeader>

              <CardContent>
                {selectedCar === car.id ? (
                  <div className="space-y-3">
                    <Input
                      type="date"
                      placeholder="Pickup date"
                      value={form.pickup_date}
                      onChange={e => setForm({...form, pickup_date: e.target.value})}
                    />
                    <Input
                      type="date"
                      placeholder="Return date"
                      value={form.return_date}
                      onChange={e => setForm({...form, return_date: e.target.value})}
                    />
                    <Button 
                      className="w-full" 
                      onClick={() => handleBook(car.id)}
                    >
                      Confirm Booking
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setSelectedCar(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full"
                    onClick={() => setSelectedCar(car.id)}
                  >
                    Book Now
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {cars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading cars...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cars
