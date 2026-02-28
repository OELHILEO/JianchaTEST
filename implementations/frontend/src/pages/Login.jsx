import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../services/api'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post('/auth/login', form)
      localStorage.setItem('token', res.data.token)
      navigate('/cars')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your Travel Naja account</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm">
                {error}
              </div>
            )}
            
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
              Sign In
            </Button>
          </CardFooter>
        </form>

        <div className="px-6 pb-6 text-center text-sm">
          <p className="text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default Login
