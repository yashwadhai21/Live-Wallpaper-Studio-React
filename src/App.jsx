import { Route ,Routes } from "react-router-dom"
import CollectionPage from "./pages/CollectionPage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='min-h-screen text-white w-full bg-gray-950'>

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