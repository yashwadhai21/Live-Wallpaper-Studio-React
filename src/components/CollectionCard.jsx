import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCollection = (item)=>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }

    const isMotionMedia = item.type === 'video' || item.type === 'gif'

  return (
    <div className='group relative h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-rose-300/40'>
        <a className='block h-full' target='_blank' rel='noreferrer' href={item.url}>
        {item.type == 'photo' ? <img className='h-full w-full object-cover transition duration-500 group-hover:scale-105' src={item.src} alt={item.title}></img> : ''}
        {isMotionMedia ? (
          <video
            className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
            autoPlay
            loop
            muted
            playsInline
            preload='metadata'
            poster={item.thumbnail}
            src={item.src}
          />
        ) : ''}
        </a>
        <div className='absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-rose-100 backdrop-blur-md'>
          {item.type}
        </div>
        <div id='bottom' className='flex items-end justify-between gap-3 absolute inset-x-0 bottom-0 px-5 py-5 text-white'>
          <h2 className='line-clamp-2 text-lg font-semibold capitalize text-balance'>{item.title}</h2>
          <button onClick={()=>{
            removeFromCollection(item)
          }}
          className='shrink-0 cursor-pointer rounded-full border border-white/15 bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95'>
            Remove
            </button>
        </div>
    </div>
  )
}

export default CollectionCard
