import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuItems from './AdminPages/MenuItems'
import AddMenuItems from './AdminPages/AddMenuItems'
import AdminAnalytics from './AdminPages/AdminAnalytics'
import AdminDashboard from './AdminPages/AdminDashboard'
import AdminEmployees from './AdminPages/AdminEmployees'
import AdminOrders from './AdminPages/AdminOrders'
import AdminSettings from './AdminPages/AdminSettings'
import LandingPage from './UserPages/LandingPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='admin/menuitems' element={<MenuItems />} />
          <Route path='admin/addmenuitems' element={<AddMenuItems />} />
          <Route path='admin/analytics' element={<AdminAnalytics />} />
          <Route path='admin/dashboard' element={<AdminDashboard />} />
          <Route path='admin/employees' element={<AdminEmployees />} />
          <Route path='admin/orders' element={<AdminOrders />} />
          <Route path='admin/settings' element={<AdminSettings />} />

          <Route path='user/landing' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App