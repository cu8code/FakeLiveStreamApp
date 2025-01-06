import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Form Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Welcome Back! Please Log In or Sign Up
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Access your account to enjoy personalized features, or create a new account to get started!
          </p>
          
          <form className="border p-8 rounded-xl max-w-lg mx-auto">
            {/* Email Input */}
            <div className="mb-6">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between gap-4">
              <button
                type="submit"
                formAction={login}
                className="w-full py-3 bg-[#E90074] text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-300"
              >
                Log In
              </button>
              <button
                type="submit"
                formAction={signup}
                className="w-full py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

