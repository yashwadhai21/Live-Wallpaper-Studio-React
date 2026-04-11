import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
        <a className='h-full' target='_blank' href={item.url}>
          {item.type == 'photo' ? <img className='h-full w-full object-center' src={item.src} alt=''></img> : ''}
        {item.type=='video'? <video className='h-full w-full object-center' src={item.src}></video> : ''}
        {item.type=='gif'? <video className='h-full w-full object-center' autoPlay loop muted src={item.src}></video> : ''}
        </a>
        <div id='bottom' className='flex items-center justify-between gap-2 h-[35%] w-full px-6 absolute bottom-0 text-white'>
          <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
          <button className='active:scale-95 bg-red-600 text-white rounded px-3 py-1 cursor-pointer font-medium'>Save</button>
        </div>
    </div>
  )
}

export default ResultCard