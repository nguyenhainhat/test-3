import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail" element={<Detail />} /> */}
        <Route path="*" component={NotFound} />
    </Routes>
  )
}

export default Router