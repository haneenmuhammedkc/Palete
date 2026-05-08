import React from "react"
import AdminSidebar from "../AdminComponents/AdminSidebar"

const AddMenuItems = () => {
  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen ml-64 px-8 py-10">

        <AdminSidebar />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#c4c7c8] mb-4">
        <span>Menu Items</span>

        <span>|</span>

        <span className="material-symbols-outlined text-[14px]">
          Add Menu Items
        </span>
      </nav>

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold text-white mb-1">
            Create Culinary Masterpiece
          </h1>

          <p className="text-[#c4c7c8]">
            Enter the details for your new menu inclusion.
          </p>
        </div>

        {/* Toggle */}
        <label className="relative inline-flex items-center cursor-pointer">

          <input
            type="checkbox"
            defaultChecked
            className="sr-only peer"
          />

          <div className="w-11 h-6 bg-[#353534] rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>

          <span className="ml-3 text-sm">
            Available for Order
          </span>

        </label>

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Side */}
        <div className="space-y-6">

          {/* Upload */}
          <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border-2 border-dashed border-[#444748] rounded-xl aspect-square flex flex-col items-center justify-center text-center p-8 cursor-pointer hover:border-white transition relative overflow-hidden group">

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCYIfqF1OaxkivcZ5_1xoiqTRv_QrccZo4SrFyZ4EJStUQnrGczf_6BCi1kCsojk4hOP6x1xr6mOTn1U60dtNXWOsCr78aupxsLS86YMpZ2gbRIjo_sOJ_CpjtrIS-3pyNepiQSZ1wf3FgvlO0k481msTxNO2Fw0OUN_I0yb91_Fuj1_X9mLo4U8P3THVLt93Y1FTVw1DDKw5AVovbzE9N8pR-HinTXmT54NQqG8a9BHaqZejsslotM2ndPcxjrfaFr_jUa23pwQU"
              alt="dish"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition"
            />

            <div className="relative z-10">

              <span className="material-symbols-outlined text-5xl text-white/60 mb-4">
                add_a_photo
              </span>

              <p className="font-semibold text-white text-lg">
                Upload Dish Media
              </p>

              <p className="text-sm text-[#c4c7c8] mt-1">
                Drag and drop or click to browse
              </p>

            </div>

          </div>

          {/* Dietary */}
          <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#2B2B2B] rounded-xl p-6">

            <h3 className="text-xl font-semibold text-white mb-4">
              Dietary Profile
            </h3>

            <div className="flex flex-wrap gap-2">

              <button className="px-4 py-1 rounded-full border border-[#2B2B2B] text-xs hover:bg-white hover:text-black transition">
                Vegan
              </button>

              <button className="px-4 py-1 rounded-full border border-[#2B2B2B] text-xs hover:bg-white hover:text-black transition">
                Vegetarian
              </button>

              <button className="px-4 py-1 rounded-full border border-white bg-white/10 text-white text-xs">
                Gluten-Free
              </button>

              <button className="px-4 py-1 rounded-full border border-[#2B2B2B] text-xs hover:bg-white hover:text-black transition">
                Dairy-Free
              </button>

              <button className="px-4 py-1 rounded-full border border-[#2B2B2B] text-xs hover:bg-white hover:text-black transition">
                Nut-Free
              </button>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="lg:col-span-2 space-y-6">

          <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#2B2B2B] rounded-xl p-8 space-y-8">

            {/* Name + Price */}
            <div className="grid grid-cols-2 gap-6">

              <div className="space-y-2">

                <label className="text-xs font-bold uppercase tracking-wider text-[#c4c7c8]">
                  Dish Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Truffle Infused Risotto"
                  className="w-full bg-[#1c1b1b] border border-[#2B2B2B] rounded-lg px-4 py-3 text-white outline-none focus:border-white"
                />

              </div>

              <div className="space-y-2">

                <label className="text-xs font-bold uppercase tracking-wider text-[#c4c7c8]">
                  Price (USD)
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c4c7c8]">
                    $
                  </span>

                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full bg-[#1c1b1b] border border-[#2B2B2B] rounded-lg pl-8 pr-4 py-3 text-white outline-none focus:border-white"
                  />

                </div>

              </div>

            </div>

            {/* Categories */}
            <div className="space-y-2">

              <label className="text-xs font-bold uppercase tracking-wider text-[#c4c7c8]">
                Category Selection
              </label>

              <div className="grid grid-cols-4 gap-2">

                <button className="py-4 px-2 rounded-lg border border-[#2B2B2B] hover:border-white transition text-center">
                  <span className="material-symbols-outlined block mb-1 text-[#c4c7c8]">
                    restaurant
                  </span>

                  <span className="text-xs">
                    Starters
                  </span>
                </button>

                <button className="py-4 px-2 rounded-lg border-2 border-white bg-white/5 text-center">
                  <span className="material-symbols-outlined block mb-1 text-white">
                    dinner_dining
                  </span>

                  <span className="text-xs font-semibold">
                    Mains
                  </span>
                </button>

                <button className="py-4 px-2 rounded-lg border border-[#2B2B2B] hover:border-white transition text-center">
                  <span className="material-symbols-outlined block mb-1 text-[#c4c7c8]">
                    cake
                  </span>

                  <span className="text-xs">
                    Desserts
                  </span>
                </button>

                <button className="py-4 px-2 rounded-lg border border-[#2B2B2B] hover:border-white transition text-center">
                  <span className="material-symbols-outlined block mb-1 text-[#c4c7c8]">
                    local_bar
                  </span>

                  <span className="text-xs">
                    Beverages
                  </span>
                </button>

              </div>

            </div>

            {/* Description */}
            <div className="space-y-2">

              <label className="text-xs font-bold uppercase tracking-wider text-[#c4c7c8]">
                Dish Description
              </label>

              <textarea
                rows="4"
                placeholder="Describe the flavors, textures, and presentation..."
                className="w-full bg-[#1c1b1b] border border-[#2B2B2B] rounded-lg px-4 py-3 text-white outline-none focus:border-white resize-none"
              ></textarea>

            </div>

            {/* Ingredients */}
            <div className="space-y-2">

              <label className="text-xs font-bold uppercase tracking-wider text-[#c4c7c8]">
                Key Ingredients
              </label>

              <input
                type="text"
                placeholder="Add an ingredient (Press Enter)"
                className="w-full bg-[#1c1b1b] border border-[#2B2B2B] rounded-lg px-4 py-3 text-white outline-none focus:border-white"
              />

              <div className="flex flex-wrap gap-2 mt-3">

                <span className="inline-flex items-center gap-1 bg-[#353534] px-3 py-1 rounded text-xs text-white">
                  Italian Truffle

                  <span className="material-symbols-outlined text-[14px] cursor-pointer">
                    close
                  </span>
                </span>

                <span className="inline-flex items-center gap-1 bg-[#353534] px-3 py-1 rounded text-xs text-white">
                  Arborio Rice

                  <span className="material-symbols-outlined text-[14px] cursor-pointer">
                    close
                  </span>
                </span>

                <span className="inline-flex items-center gap-1 bg-[#353534] px-3 py-1 rounded text-xs text-white">
                  Parmesan

                  <span className="material-symbols-outlined text-[14px] cursor-pointer">
                    close
                  </span>
                </span>

              </div>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-4">

            <button className="px-8 py-3 rounded-lg font-semibold text-[#c4c7c8] hover:text-white transition">
              Cancel
            </button>

            <button className="px-12 py-3 rounded-lg bg-white text-black font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 transition">
              Save Dish
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AddMenuItems