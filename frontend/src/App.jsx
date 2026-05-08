import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuItems from './AdminPages/MenuItems'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='admin/menuitems' element={<MenuItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App