import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuItems from './AdminPages/MenuItems'
import AddMenuItems from './AdminPages/AddMenuItems'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='admin/menuitems' element={<MenuItems />} />
          <Route path='admin/addmenuitems' element={<AddMenuItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App