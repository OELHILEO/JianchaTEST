import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'

function Bookings() {
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) return navigate('/login')
    api.get('/bookings').then(res => setBookings(res.data))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">My Bookings</h1>
        <p className="text-muted-foreground mb-8">View and manage your car rental reservations</p>

        {bookings.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground">You haven't made any bookings yet</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Car</TableHead>
                    <TableHead>Pickup Date</TableHead>
                    <TableHead>Return Date</TableHead>
                    <TableHead>Total Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map(b => (
                    <TableRow key={b.id}>
                      <TableCell className="font-medium">
                        {b.brand} {b.model}
                      </TableCell>
                      <TableCell>{b.pickup_date?.split('T')[0]}</TableCell>
                      <TableCell>{b.return_date?.split('T')[0]}</TableCell>
                      <TableCell className="font-semibold">฿{b.total_price}</TableCell>
                      <TableCell>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                          {b.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Bookings
