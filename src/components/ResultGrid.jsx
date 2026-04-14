import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGif, getPlayableVideoFile } from '../api/mediaApi'
import {setLoading,setError,setResults} from '../redux/features/searchSlice'
import {useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const {query , activeTab , results , loading , error} = useSelector ((store) => store.search)
    

    useEffect(function(){
        if(!query) return 
         const getData = async ()=>{
        try {
            dispatch(setLoading())
            let data =[]
        if(activeTab == 'photos'){
            let response = await fetchPhotos(query)
            data = response.results.map((item)=>({
                id:item.id,
                type:'photo',
                title:item.alt_description || query,
                thumbnail:item.urls.small,
                src:item.urls.full,
                url:item.links.html
            }))
        }
        if(activeTab == 'videos'){
            let response = await fetchVideos(query)
            data = response.videos.map((item)=>({
                id:item.id,
                type:'video',
                title:item.user.name || 'video',
                thumbnail:item.image,
                src:getPlayableVideoFile(item.video_files),
                url:item.url
            })).filter((item) => item.src)
        }
        if(activeTab == 'gif'){
            let response = await fetchGif(query)
            data = response.videos.map((item)=>({
                id:item.id,
                type:'gif',
                title:item.user.name || 'gif',
                thumbnail:item.image,
                src:getPlayableVideoFile(item.video_files),
                url:item.url
            })).filter((item) => item.src)
        }
        dispatch(setResults(data))
        } catch (err) {
            dispatch(setError(err.message))
        }
    }
        getData()
    },[query,activeTab,dispatch])

    if(error) {
        return (
            <div className='mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8'>
                <div className='rounded-3xl border border-red-400/20 bg-red-500/10 px-6 py-8 text-center text-red-100 backdrop-blur-sm'>
                    <h2 className='text-xl font-semibold'>Could not load media</h2>
                    <p className='mt-2 text-sm text-red-100/80'>{error}</p>
                </div>
            </div>
        )
    }

    if(loading) {
        return (
            <div className='mx-auto mt-8 grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-8'>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className='h-80 animate-pulse rounded-[2rem] border border-white/10 bg-white/5'
                    />
                ))}
            </div>
        )
    }

    if(!results.length) {
        return (
            <div className='mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8'>
                <div className='rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-center text-slate-200 backdrop-blur-sm'>
                    <h2 className='text-xl font-semibold'>No results yet</h2>
                    <p className='mt-2 text-sm text-slate-300/75'>
                        Try a different keyword or switch tabs to explore another media type.
                    </p>
                </div>
            </div>
        )
    }

  return (
    <div className='mx-auto mt-8 grid max-w-6xl gap-5 px-4 pb-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-8'>
        {results.map((item)=>{
            return <div key={item.id}>
                 <ResultCard item={item}/>
            </div>
        })}
    </div>
  )
}

export default ResultGrid
