import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../services/api'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/auth/register', form)
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.message || 'Register failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Join Travel Naja and start booking</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
                {error}
              </div>
            )}
            
            <Input
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={e => setForm({...form, password: e.target.value})}
              required
            />
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </CardFooter>
        </form>

        <div className="px-6 pb-6 text-center text-sm">
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default Register
