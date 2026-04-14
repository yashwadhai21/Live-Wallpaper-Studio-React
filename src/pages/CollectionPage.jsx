import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'

const CollectionPage = () => {

  const collection = useSelector(state=>state.collection.items)

  return (
    <section className='mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mb-8 flex flex-col gap-2'>
        <p className='text-sm font-medium uppercase tracking-[0.34em] text-rose-200/80'>Saved Picks</p>
        <h1 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>Your collection</h1>
        <p className='max-w-2xl text-sm leading-7 text-slate-300 sm:text-base'>
          Keep your favorite wallpapers here so you can revisit them without searching again.
        </p>
      </div>

      {!collection.length ? (
        <div className='rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-center text-slate-200 backdrop-blur-sm'>
          <h2 className='text-xl font-semibold'>Nothing saved yet</h2>
          <p className='mt-2 text-sm text-slate-300/75'>
            Save any photo, video, or gif from the search page and it will appear here.
          </p>
        </div>
      ) : (
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {collection.map((item)=>{
            return <div key={item.id}>
              <CollectionCard item={item}/>
            </div>
          })}
        </div>
      )}
    </section>
  )
}

export default CollectionPage
