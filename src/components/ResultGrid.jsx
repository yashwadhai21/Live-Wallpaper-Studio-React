import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos,fetchGif} from '../api/mediaApi'
import {setQuery,setLoading,setError,setResults} from '../redux/features/searchSlice'

const ResultGrid = () => {

    const {query , activeTab , results , loading , error} = useSelector ((store) => store.search)
    
    let data 
    const getData = async ()=>{
        if(activeTab == 'photos'){
            data = await fetchPhotos(query)
            console.log(data)
        }
        if(activeTab == 'videos'){
            data = await fetchVideos(query)
            console.log(data)
        }
        if(activeTab == 'gif'){
            data = await fetchGif(query)
            console.log(data)
        }
    }
  return (
    <div>
        <button onClick={getData}>getData</button>
    </div>
  )
}

export default ResultGrid