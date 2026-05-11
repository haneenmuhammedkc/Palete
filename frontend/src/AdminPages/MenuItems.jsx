import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Search, Bell, MessageSquare, Plus, MoreHorizontal, Copy, Edit3, Flame, Check, UtensilsCrossed } from 'lucide-react'
import AdminSidebar from '../AdminComponents/AdminSidebar'


const DISHES = [
  {
    id: 1,
    name: 'Artisanal Bruschetta',
    price: 18.00,
    description: 'Heirloom tomatoes, balsamic glaze, and fresh basil on toasted sourdough bread.',
    popular: true,
    available: true,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Truffle Arancini',
    price: 22.50,
    description: 'Crispy risotto balls filled with black truffle and melted mozzarella, served with aioli.',
    popular: true,
    available: true,
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Calimari Fritti',
    price: 16.00,
    description: 'Lightly battered squid rings with a zest of lemon and spicy marinara dip.',
    popular: false,
    available: false,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c175f0?auto=format&fit=crop&q=80&w=800'
  }
]

const App = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState(DISHES);
  const [categoriesLoading, setCategoriesLoading] = useState(false);

  const [categories, setCategories] =
      useState([]);

   const [showModal, setShowModal] =
      useState(false);

   const [loading, setLoading] =
      useState(false);


      const [formData, setFormData] =
      useState({
         name: "",
      });


  const fetchCategories = async () => {

   try {

      setCategoriesLoading(true);

      const response = await axios.get(
         "http://localhost:3001/api/categories"
      );

      const data = response.data.data;

      setCategories(data);

      if (data.length > 0) {
         setActiveCategory(data[0]._id);
      }

   } catch (error) {

      console.log(
         error.response?.data || error.message
      );

   } finally {

      setCategoriesLoading(false);
   }
};

useEffect(() => {

   fetchCategories();

}, []);

   const handleChange = (e) => {

      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };



   const handleSubmit = async (e) => {

      e.preventDefault();

      try {

         setLoading(true);

         const response = await axios.post(
            "http://localhost:3001/api/categories",
            formData
         );

        const newCategory = response.data.data;

setCategories((prev) => [
   newCategory,
   ...prev
]);

setActiveCategory(newCategory._id);

         setFormData({
            name: ""
         });

         setShowModal(false);

      } catch (error) {

         console.log(
   error.response?.data || error.message
);

      } finally {

         setLoading(false);
      }
   };

  const toggleAvailability = (id) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ))
  }

const activeCategoryData = categories.find(
   (cat) => cat._id === activeCategory
);  

  return (
    <>
    <div className="flex min-h-screen bg-[#0B0B0B] text-[#E0E0E0] font-sans selection:bg-white selection:text-black">
      
      <AdminSidebar />

      {/* Main Container */}
      <div className="flex-1 ml-64 flex flex-col">
        
        {/* Header */}
        <header className="h-20 border-b border-[#262626] bg-[#0B0B0B]/80 backdrop-blur-md flex items-center justify-between px-10 sticky top-0 z-40">
          
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555]" size={18} />
            <input type="text" placeholder="Search menu items..."
              className="w-full bg-[#161616] border border-[#262626] rounded-full py-2.5 pl-12 pr-4 text-sm outline-none
              focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all cursor-pointer"
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>

          {/* Notification, Message & Profile Section */}
          <div className="flex items-center gap-4">
            <HeaderAction icon={<Bell size={20} />} dot />
            <HeaderAction icon={<MessageSquare size={20} />} />
            
            <div className="h-10 w-px bg-[#262626] mx-2"></div>
            
            <div className="flex items-center gap-3 pl-2 group cursor-pointer">
              <div className="text-right">
                <p className="text-xs font-bold text-white group-hover:text-white/80 transition-colors">Marcus Vane</p>
                <p className="text-[10px] text-green-500 font-medium">Executive Chef</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#262626] overflow-hidden group-hover:border-white/20 transition-all">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                  alt="avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Sub-Navigation (Categories) */}
          <aside className="w-80 border-r border-[#262626] p-8 flex flex-col gap-8 bg-[#0D0D0D]">
            <div className="flex items-center justify-between">
              <h2 className="text-sm uppercase tracking-widest font-bold text-[#555]">Categories</h2>
              <button  onClick={() => setShowModal(true)} className="p-1.5 rounded-lg bg-[#161616] text-[#888] hover:text-white hover:bg-[#222] transition-colors">
                <Plus size={16} />
              </button>
            </div>

            <div className="space-y-2">
              {categoriesLoading && (
   <p className="text-sm text-zinc-500">
      Loading categories...
   </p>
)}
              {categories.map((cat) => (
                <button
                  key={cat._id}
                  onClick={() => setActiveCategory(cat._id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                    activeCategory === cat._id 
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/5' 
                    : 'text-[#888] hover:bg-[#161616] hover:text-[#BBB]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={activeCategory === cat._id ? 'text-black' : 'text-[#555] group-hover:text-white transition-colors'}>
                      <UtensilsCrossed size={18} />
                    </span>
                    <span className="text-sm">{cat.name}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    activeCategory === cat._id ? 'bg-black/10 text-black' : 'bg-[#1A1A1A] text-[#555]'
                  }`}>
                    0
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-auto">
              <div className="p-5 rounded-2xl bg-linear-to-br from-[#161616] to-[#0D0D0D] border border-[#262626]">
                <p className="text-[10px] uppercase tracking-widest text-[#555] mb-3 font-bold">System Status</p>
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </div>
                  <span className="text-xs text-[#AAA] font-medium">Digital Menus Active</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Grid View */}
          <main className="flex-1 overflow-y-auto p-10 bg-[#0B0B0B]">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-4xl font-black text-white mb-2 capitalize tracking-tight">{activeCategoryData?.name || "Categories"}</h2>
                <p className="text-[#666] text-sm">Curate and manage your premium selection for this category.</p>
              </div>
              <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#EEE] active:scale-95 transition-all shadow-xl shadow-white/5">
                <Plus size={18} strokeWidth={3} />
                Add New Dish
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {items.map((dish) => (
                <div key={dish.id} className="group bg-[#121212] border border-[#262626] rounded-3xl overflow-hidden hover:border-[#444] transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    
                    {dish.popular && (
                      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-full flex items-center gap-1">
                        <Flame size={12} className="text-orange-500 fill-orange-500" />
                        Popular Choice
                      </div>
                    )}
                    
                    <button className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full text-white/60 hover:text-white transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">{dish.name}</h3>
                      <span className="text-sm font-mono font-black text-white bg-[#1A1A1A] px-2 py-1 rounded-lg">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>
                    
                    <p className="text-sm text-[#777] leading-relaxed mb-6 line-clamp-2">
                      {dish.description}
                    </p>

                    <div className="flex items-center justify-between pt-5 border-t border-[#262626]">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => toggleAvailability(dish.id)}
                          className={`w-10 h-5 rounded-full transition-all relative ${dish.available ? 'bg-green-500' : 'bg-[#333]'}`}
                        >
                          <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${dish.available ? 'left-6' : 'left-1'}`}></div>
                        </button>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${dish.available ? 'text-green-500' : 'text-[#555]'}`}>
                          {dish.available ? 'Available' : 'Sold Out'}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <CardAction icon={<Copy size={16} />} />
                        <CardAction icon={<Edit3 size={16} />} border />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>

       {showModal && (

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

               {/* Modal Box */}

               <div className="w-[420px] bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl">

                  {/* Header */}

                  <div className="flex items-center justify-between mb-6">

                     <div>

                        <h2 className="text-2xl font-bold">
                           Add Category
                        </h2>

                        <p className="text-zinc-400 text-sm mt-1">
                           Create a new menu category
                        </p>

                     </div>

                     <button
                        onClick={() =>
                           setShowModal(false)
                        }
                        className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition"
                     >
                        ✕
                     </button>

                  </div>

                  {/* Form */}

                  <form
                     onSubmit={handleSubmit}
                     className="space-y-4"
                  >

                     {/* Name */}

                     <div>

                        <label className="text-sm text-zinc-400 mb-2 block">
                           Category Name
                        </label>

                        <input
                           type="text"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Starters"
                           required
                           className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-white transition text-white"
                        />

                     </div>

                  

                     <div className="flex items-center gap-3 pt-2">

                        <button
                           type="button"
                           onClick={() =>
                              setShowModal(false)
                           }
                           className="flex-1 bg-zinc-900 hover:bg-zinc-800 transition rounded-xl py-3"
                        >
                           Cancel
                        </button>

                        <button
                           type="submit"
                           disabled={loading}
                           className="flex-1 bg-white text-black font-semibold rounded-xl py-3 hover:opacity-90 transition"
                        >
                           {
                              loading
                                 ? "Creating..."
                                 : "Create"
                           }
                        </button>

                     </div>

                  </form>

               </div>

            </div>
         )}
    </>
  );
};

 

const HeaderAction = ({ icon, dot }) => (
  <button className="p-2.5 rounded-xl bg-[#161616] border border-[#262626] text-[#888] hover:text-white hover:border-[#444] transition-all relative cursor-pointer">
    {icon}
    {dot && <span className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full border-2 border-[#161616]"></span>}
  </button>
);

const CardAction = ({ icon, border }) => (
  <button className={`p-2 rounded-xl transition-all ${
    border 
    ? 'border border-[#262626] hover:border-[#555] text-[#888] hover:text-white' 
    : 'text-[#444] hover:text-white'
  }`}>
    {icon}
  </button>
);

export default App