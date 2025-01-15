'use client'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>Interactive Coding Narratives</title>
        <meta
          name="description"
          content="Learn coding through interactive storytelling."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold text-gray-800">
              ICN
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link
                href="/products"
                className="text-gray-700 hover:text-gray-900"
              >
                Products
              </Link>
              <Link
                href="/resources"
                className="text-gray-700 hover:text-gray-900"
              >
                Resources
              </Link>
              <Link
                href="/solutions"
                className="text-gray-700 hover:text-gray-900"
              >
                Solutions
              </Link>
              <Link
                href="/company"
                className="text-gray-700 hover:text-gray-900"
              >
                Company
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-gray-900"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/support" className="text-gray-700 hover:text-gray-900">
              Support
            </Link>
            <Link href="/sign-in" className="text-gray-700 hover:text-gray-900">
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Try Free
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Loved by developers.
          <br />
          Built for{' '}
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
            Graph Data
          </span>
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          You don’t need a separate database to support transactions, rich
          search, or gen AI. The world’s most popular document database is now
          the world’s most versatile developer data platform.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <Link
            href="/sign-up"
            className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Try ICN Free
          </Link>
          <Link
            href="/learn-more"
            className="px-6 py-3 border border-green-500 text-green-600 rounded hover:bg-green-100"
          >
            Learn more
          </Link>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 text-gray-600">
          <div>52K+ Customers</div>
          <div>115+ Regions across AWS, Azure, and Google Cloud</div>
          <div>175K+ Developers join every month</div>
          <div>#1 Most used mod database</div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-medium mb-4">Engaging Storylines</h2>
            <p className="text-gray-600">
              Experience thrilling narratives that keep you hooked.
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-2xl font-medium mb-4">
              Interactive Challenges
            </h2>
            <p className="text-gray-600">
              Solve real-world coding problems in an interactive environment.
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-2xl font-medium mb-4">Progress Tracking</h2>
            <p className="text-gray-600">
              Track your progress and see how far you've come in your coding
              journey.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
