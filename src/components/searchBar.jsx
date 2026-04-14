import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')

    const disptach = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault()
        disptach(setQuery(text))
    }

  return (
    <section className='mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14'>
      <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.2),_transparent_24%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.92))] px-6 py-8 shadow-[0_30px_100px_rgba(8,15,32,0.45)] sm:px-8 sm:py-10'>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.34em] text-cyan-200/80'>Wallpaper Discovery</p>
          <h1 className='mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
            Find looping visuals that feel alive on screen.
          </h1>
          <p className='mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg'>
            Search photos, videos, and animated loops in one place, preview them instantly, and keep the best ones in your collection.
          </p>
        </div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-4 shadow-inner shadow-black/20 backdrop-blur-md sm:flex-row'>
            <input value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            className='w-full rounded-2xl border border-white/10 bg-transparent px-5 py-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60'
            required type="text" placeholder='Search anything'/>
            <button className='cursor-pointer rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-200 active:scale-95'
            >Search</button>
        </form>
      </div>
    </section>
  )
}

export default SearchBar
