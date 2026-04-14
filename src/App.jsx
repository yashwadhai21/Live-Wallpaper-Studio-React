import { Route ,Routes } from "react-router-dom"
import CollectionPage from "./pages/CollectionPage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.1),_transparent_22%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)] text-white'>

    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/collection' element={<CollectionPage/>}></Route>
      </Routes>

      <ToastContainer />

    </div>
  )
}

export default App
