import React from 'react'
import { LayoutDashboard, UtensilsCrossed, ReceiptText, BadgeCheck, BarChart3, Settings, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#121212] border-r border-[#262626] flex flex-col py-8 z-50">

      <div className="px-8 mb-10">
        <div className="flex items-center gap-2">

          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45"></div>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white leading-none">
              Palete
            </h1>

            <p className="text-[10px] uppercase tracking-widest text-[#666] mt-1 font-semibold">
              Admin Suite
            </p>
          </div>

        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">

        <NavItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          to="/admin/dashboard"
        />

        <NavItem
          icon={<UtensilsCrossed size={20} />}
          label="Menu Items"
          to="/admin/menuitems"
          active
        />

        <NavItem
          icon={<ReceiptText size={20} />}
          label="Orders"
          to="/admin/orders"
          badge="5"
        />

        <NavItem
          icon={<BadgeCheck size={20} />}
          label="Employees"
          to="/admin/employees"
        />

        <NavItem
          icon={<BarChart3 size={20} />}
          label="Analytics"
          to="/admin/analytics"
        />

        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
          to="/admin/settings"
        />

      </nav>

      <div className="px-4 mt-auto">

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-[#888] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200">

          <LogOut size={20} />

          <span className="font-medium text-sm">
            Logout
          </span>

        </button>

      </div>

    </aside>
  )
}

const NavItem = ({
  icon,
  label,
  active = false,
  badge,
  to
}) => (
  <Link
    to={to}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
      active
        ? 'bg-[#1A1A1A] text-white'
        : 'text-[#666] hover:bg-[#161616] hover:text-[#AAA]'
    }`}
  >

    <div className="flex items-center gap-4">

      <span
        className={
          active
            ? 'text-white'
            : 'text-[#444] group-hover:text-[#AAA] transition-colors'
        }
      >
        {icon}
      </span>

      <span className="text-sm font-semibold tracking-tight">
        {label}
      </span>

    </div>

    {badge && (
      <span className="bg-white text-black text-[10px] font-black px-1.5 rounded-sm min-w-[18px] text-center">
        {badge}
      </span>
    )}

  </Link>
)

export default AdminSidebar