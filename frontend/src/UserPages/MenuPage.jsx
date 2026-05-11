import React from "react"

const menuItems = [
  {
    id: 1,
    name: "Seared Salmon Salad",
    description: "Gluten-free, citrus vinaigrette",
    price: "$28.00",
    rating: "4.9",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjVz8_k2nhd-_PxgHKkseF80cC-1NkuM7BftBF6QrvRZqdJLG7XedK0cxZTZGPsaoLTDVXZbshtz8MeoZya4nSWtz2UWWYYS9g_sGfCOYDJTsdNWhV-jEOUyjI0rmnq0LApn_CcwEPl3Lq2eAL-T_8S-FImmEq2xh9_BbxUfLQRE_Hnni42uX9kgi757-BS5rUXsR9XPpnK6Rl_iCGanYgVXl9uG4giRzDtywpreSTL25JnClJSWZye1JnXkvWxZyy_QanuFSrzj8",
  },
  {
    id: 2,
    name: "Aged Beef Tartare",
    description: "Cured egg yolk, truffle",
    price: "$32.00",
    rating: "4.8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5WuDLgu5-zVHsyoYjyrj2lTJe-7ssf8djO8cLQaFypNoO08vj0P8tjJv7D2zjWP383WvLNf17z4MuUckrzL7PSbL03-LE62mJVEf8Vq736tchyfMluJASZ9pC_Yzl26W9puuPSBJCxlNNwposcbTTfV_Js2xMnfIuaTMLUgtUKcR5T6UJsJ5-8jmj5HIJD13d38goiVDeOQHpFHz6gaPRUhBJYATK5n6B233tMAeBDH-wulkArb17dZYPcxQxXtunIucCppfSZe8",
  },
  {
    id: 3,
    name: "Diver Scallops",
    description: "Cauliflower silk, capers",
    price: "$36.00",
    rating: "5.0",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4qIQa2959RbpTE37i_nQhnkfqZfJLKi0dPw6qroZcvoJUQZMbsX9ouz91UjubVkz9UMWfPYDLZj_kvOWu-jeeCqSuHGYUp9bLf_2U4vWLapIEKg1y8--XljFLSKqq2v7yLDyEpGSrOtAb-tmkSHxqLKHWQuy_yY0wmooDt3RCU5Bj8ba9uWjoC2DbvfQeuKp0ERFitMzDC2yB0LUV3lAlI8yglQ6-Pe-jdgQ48v6FajXf0faPemKmpT8w0cYDNJ9Aexbp938DDQI",
  },
  {
    id: 4,
    name: "Heirloom Beets",
    description: "Pistachio, aged balsamic",
    price: "$19.00",
    rating: "4.7",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAx87Pg9f_uqxyVSPtVW6X6RRhYlS02WaVlPies9X24hIA8hdgRvFqTSSG9_xnBQX2BJaSaBHywvcl6xRRimQdz08XWLTJCSHyKDDYkpI9J65di5fwpamKvFWQyUCt2fCbJAE84L9RHfNdx_FB6vWesXa0qwNjWT3yzueGpdmIo0Rtzb12SZJjppheklvRlntHU-CwxFDl7uFOINZPr3lvHHo3QCQZEnB37quqndXVWmEXMEQ9iY6dhnnuNOjquEk5plY_CCv_HZM0",
  },
]

const categories = ["Appetizers", "Mains", "Drinks", "Desserts"]

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      
      {/* Main Wrapper */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row">

        {/* LEFT SIDE */}
        <div className="flex-1">

          {/* Header */}
          <header className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 bg-[#0F0F0F] border-b border-white/5">
            <h1 className="text-lg sm:text-xl font-light tracking-[0.3em] uppercase">
              Palate
            </h1>

            <button className="relative p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.3 21a1.94 1.94 0 003.4 0"
                />
              </svg>

              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-black"></span>
            </button>
          </header>

          {/* Hero */}
          <section className="px-4 sm:px-6 lg:px-10 pt-8 pb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Good Evening,
              <br />
              <span className="font-bold">Valued Customer</span>
            </h2>
          </section>

          {/* Search */}
          <div className="px-4 sm:px-6 lg:px-10 mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Search the menu..."
                className="w-full bg-[#1A1A1A] rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-3 px-4 sm:px-6 lg:px-10 mb-8 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-5 sm:px-6 py-2.5 rounded-full whitespace-nowrap text-sm transition-all ${
                  index === 0
                    ? "bg-white text-black font-semibold"
                    : "bg-[#1A1A1A] text-white border border-white/10 font-medium"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <main className="px-4 sm:px-6 lg:px-10 pb-32 lg:pb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1A1A1A] rounded-[2rem] sm:rounded-[2.5rem] p-3 border border-white/5 flex flex-col"
                >
                  
                  {/* Image */}
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-[1.7rem] sm:rounded-[2rem]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />

                    {/* Rating */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md">
                      <svg
                        className="w-3 h-3 text-yellow-400 fill-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <span className="text-[10px] font-bold">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow px-1 sm:px-2">
                    <h3 className="mb-1 text-sm sm:text-base lg:text-lg font-semibold leading-tight">
                      {item.name}
                    </h3>

                    <p className="mb-4 text-xs sm:text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm sm:text-base lg:text-lg font-bold">
                        {item.price}
                      </span>

                      <button className="p-2.5 bg-white text-black rounded-full shadow-lg active:scale-95 transition-transform hover:scale-105">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 5v14m-7-7h14"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* RIGHT SIDEBAR - LARGE SCREENS ONLY */}
        <div className="hidden lg:flex w-[350px] xl:w-[400px] border-l border-white/5 min-h-screen sticky top-0 p-8 flex-col bg-[#121212]">
          
          <h3 className="text-2xl font-bold mb-6">
            Your Order
          </h3>

          <div className="space-y-4 flex-1">

            <div className="bg-[#1A1A1A] rounded-3xl p-4 flex items-center gap-4">
              <img
                src={menuItems[0].image}
                alt=""
                className="w-20 h-20 rounded-2xl object-cover"
              />

              <div className="flex-1">
                <h4 className="font-semibold">
                  Seared Salmon
                </h4>

                <p className="text-sm text-gray-400">
                  1 Item
                </p>

                <p className="font-bold mt-1">
                  $28.00
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-3xl p-4 flex items-center gap-4">
              <img
                src={menuItems[1].image}
                alt=""
                className="w-20 h-20 rounded-2xl object-cover"
              />

              <div className="flex-1">
                <h4 className="font-semibold">
                  Beef Tartare
                </h4>

                <p className="text-sm text-gray-400">
                  1 Item
                </p>

                <p className="font-bold mt-1">
                  $32.00
                </p>
              </div>
            </div>
          </div>

          {/* Checkout */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">
                Total
              </span>

              <span className="text-2xl font-bold">
                $60.00
              </span>
            </div>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-transform">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Floating Cart Button - Mobile Only */}
      <button className="lg:hidden fixed z-[60] flex items-center justify-center w-16 h-16 text-black transition-transform bg-white rounded-full shadow-2xl bottom-24 right-6 active:scale-90">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
            />
          </svg>

          <span className="absolute flex items-center justify-center w-6 h-6 text-[10px] font-bold text-white bg-red-600 border-2 border-white rounded-full -top-3 -right-3">
            3
          </span>
        </div>
      </button>

      {/* Bottom Nav - Mobile Only */}
      <footer className="lg:hidden fixed bottom-0 left-0 right-0 z-[70] flex items-center justify-between px-8 py-4 border-t bg-[#0F0F0F]/90 backdrop-blur-xl border-white/5">
        
        <button className="flex flex-col items-center gap-1 text-white">
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Menu
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Orders
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Help
          </span>
        </button>
      </footer>
    </div>
  )
}

export default MenuPage