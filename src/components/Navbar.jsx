import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-10 bg-blue-900'>
        <h2 className='font-medium text-2xl'>Media Search</h2>
        < div className='flex gap-5 items-center'>
        <Link className='active:scale-95 text-base text-medium bg-blue-400 text-red-100 rounded px-4 py-2 ' to='/'>Search</Link>
        <Link className='active:scale-95 text-base text-medium bg-blue-400 text-red-100 rounded px-4 py-2 ' to='/collection'>Collection</Link>
      </div>
    </div>
  )
}

export default Navbar