import React, { useState } from "react"
import {
  ArrowRight,
  Eye,
  Lock,
  Mail,
  Headphones,
  ExternalLink,
} from "lucide-react"

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative h-screen overflow-hidden bg-[#131313] text-white">
      
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-white/5 blur-[120px]" />

        <div className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 flex h-full">
        
        {/* LEFT SIDE */}
        <div className="flex flex-1 items-center justify-center px-4 py-4 sm:px-6 lg:px-10">
          
          {/* Login Container */}
          <div className="w-full max-w-[440px]">
            
            {/* Brand Header */}
            <div className="mb-6 flex flex-col items-center">
              
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-9 w-9 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h7.5m-7.5 4.5h7.5m-7.5 4.5h7.5M5.25 3v18m13.5-18v18"
                  />
                </svg>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-white">
                Palete
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Admin Suite Management
              </p>
            </div>

            {/* Login Card */}
            <div className="rounded-3xl border border-[#2B2B2B] bg-[#1A1A1A]/70 p-5 sm:p-6 backdrop-blur-2xl shadow-2xl">
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white">
                  System Access
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Enter your credentials to continue.
                </p>
              </div>

              <form className="space-y-5">
                
                {/* Email */}
                <div>
                  <label className="mb-2 block text-xs tracking-[0.2em] text-gray-400 uppercase">
                    Admin Email
                  </label>

                  <div className="group relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-white" />

                    <input
                      type="email"
                      placeholder="admin@palete.com"
                      className="w-full rounded-xl border border-[#2B2B2B] bg-[#1c1b1b] py-4 pl-12 pr-4 text-white outline-none transition-all placeholder:text-gray-500 focus:border-white"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-xs tracking-[0.2em] text-gray-400 uppercase">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs text-gray-500 transition-colors hover:text-white"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <div className="group relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-white" />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••••"
                      className="w-full rounded-xl border border-[#2B2B2B] bg-[#1c1b1b] py-4 pl-12 pr-12 text-white outline-none transition-all placeholder:text-gray-500 focus:border-white"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-white"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-[#2B2B2B] bg-[#1c1b1b] text-white focus:ring-0"
                  />

                  <label
                    htmlFor="remember"
                    className="cursor-pointer text-sm text-gray-400"
                  >
                    Stay authenticated for 30 days
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 font-semibold text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-[0.98]"
                >
                  <span>Secure Login</span>

                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col items-center gap-4">
              
              <button className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white">
                <Headphones className="h-4 w-4" />

                <span>Contact System Admin</span>

                <ExternalLink className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
              </button>

              <div className="flex items-center gap-3 text-xs text-gray-600">
                <span>v4.2.0-stable</span>

                <span className="h-1 w-1 rounded-full bg-gray-600" />

                <span>SSL Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE PANEL */}
        <div className="hidden xl:block relative h-full w-[420px] 2xl:w-[500px] p-5">
          
          <div className="relative h-full overflow-hidden rounded-[2rem] border border-[#2B2B2B]">
            
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWf1lfywMZmJPqacALj0sraUMnokXMEso5drlyP4SeBIfBTgtdX5pSVYwNbMQxxXa1RUoUUVEXhPYvO-lpUDfIFVWyO6cLMwitUcElcThHaEK0R4B2HoWkAfZoBeAfH1S1rSBPOpzoF7Tjsp9V-p6CLZNRAkbL6ZKL_jZi5ujd3K5mz-fRRfN512x0BLSCPjUIDgjGQwInRxHRSJNt64bUBD321oE2XK9wuHEpdWJsaXWaz2WZArTf6AUzyk9oMyKVGWrbMO1SP44"
              alt="Luxury Restaurant"
              className="h-full w-full object-cover grayscale opacity-40 transition-all duration-700 hover:grayscale-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Bottom Card */}
            <div className="absolute bottom-6 left-6 right-6">
              
              <div className="rounded-3xl border border-[#2B2B2B] bg-[#1A1A1A]/70 p-6 backdrop-blur-2xl">
                
                {/* Status */}
                <div className="mb-4 flex items-center gap-3 text-emerald-400">
                  
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </div>

                  <span className="text-xs tracking-[0.25em] uppercase">
                    System Status: Optimal
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Real-time Culinary Intelligence
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Empowering the world's finest kitchens with
                  data-driven precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin