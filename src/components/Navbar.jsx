import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <Link to='/' className='flex items-center gap-3'>
          <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 via-sky-500 to-indigo-500 text-lg font-black text-slate-950 shadow-lg shadow-cyan-900/30'>
            LS
          </div>
          <div>
            <p className='text-lg font-semibold tracking-wide text-white'>LiveWallpaperStudio</p>
            <p className='text-xs uppercase tracking-[0.28em] text-slate-400'>Search. Preview. Save.</p>
          </div>
        </Link>
        <nav className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-300'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition ${isActive ? 'bg-white text-slate-950' : 'hover:bg-white/10'}`
            }
          >
            Search
          </NavLink>
          <NavLink
            to='/collection'
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition ${isActive ? 'bg-white text-slate-950' : 'hover:bg-white/10'}`
            }
          >
            Collection
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
