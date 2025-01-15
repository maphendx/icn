'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface FormData {
  email: string
  password: string
}

const Signin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        formData
      )
      const { token } = res.data
      localStorage.setItem('token', token)
      alert('Login successful!')
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.msg || 'Invalid credentials!')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <Link
              href="/sign-up"
              className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-700"
            >
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
