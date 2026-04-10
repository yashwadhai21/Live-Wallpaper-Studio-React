import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'

const searchBar = () => {

    const [text, setText] = useState('')

    const disptach = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(text)

        disptach(setQuery(text))
        
        setText('')
    }

  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex bg-gray-900 gap-5 p-10'>
            <input value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            className='w-full border-2 px-4 py-2 text-xl rounded outline-none'
            required type="text" placeholder='Search anything'/>
            <button className='active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none'
            >Search</button>
        </form>
    </div>
  )
}

export default searchBar