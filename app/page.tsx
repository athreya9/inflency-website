import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-purple-800 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Connect.
                <br />
                <span className="text-green-400">Create.</span>
                <br />
                Monetize.
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Discovering the right partners at the right time is a game-changer for your business. Inflency connects
                influencers and brands for powerful collaborations.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://dashboard.inflency.com/register"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get started
                </a>
                <button className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-purple-600 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-gray-600 text-sm font-semibold mb-8 uppercase tracking-wide">
            Trusted by top brands and influencers worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-300 h-12 rounded flex items-center justify-center">
                <span className="text-gray-500 font-semibold">BRAND LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">How it works</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Diversify your channels through an ecosystem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inflency accelerates the growth of your partner ecosystem by simplifying every step of your partnerships
            journey.
          </p>
        </div>
      </section>
    </div>
  )
}
