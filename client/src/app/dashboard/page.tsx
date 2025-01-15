'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Dashboard: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/signin')
    }
  }, [router])

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
    </div>
  )
}

export default Dashboard
