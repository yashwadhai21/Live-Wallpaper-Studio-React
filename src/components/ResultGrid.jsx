import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos,fetchGif} from '../api/mediaApi'
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
                title:item.alt_description,
                thumbnail:item.urls.small,
                src:item.urls.full
            }))
        }
        if(activeTab == 'videos'){
            let response = await fetchVideos(query)
            data = response.videos.map((item)=>({
                id:item.id,
                type:'video',
                title:item.user.name || 'video',
                thumbnail:item.image,
                src:item.video_files[0].link
            }))
        }
        if(activeTab == 'gif'){
            let response = await fetchGif(query)
            data = response.videos.map((item)=>({
                id:item.id,
                type:'GIF',
                title:item.user.name || 'Gif',
                thumbnail:item.image,
                src:item.video_files[0].link
            }))
        }
        console.log(data)
        dispatch(setResults(data))
        } catch (err) {
            dispatch(setError(err.message))
        }
    }
        getData()
    },[query,activeTab])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>
  return (
    <div>
        {results.map((item,idx)=>{
            return <div key={idx}>
                        <ResultCard item={item}/>
                    </div>
        })}
    </div>
  )
}

export default ResultGrid