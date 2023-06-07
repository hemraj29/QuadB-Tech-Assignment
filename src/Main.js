import React from 'react'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Summary from './Summary'
import FromForTicketBoiking from './FromForTicketBoiking'

const Main = () => {
  return (
    <div>
<BrowserRouter>
     <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/detail' element={<Summary/>} ></Route>
        <Route path='/book-ticket' element={<FromForTicketBoiking/>}></Route>
     </Routes>
 </BrowserRouter>
    </div>
  )
}

export default Main