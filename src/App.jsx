import { fetchPhotos, fetchVideos } from "./api/mediaApi"


const App = () => {

  return (
    <div className='h-screen text-white w-full bg-gray-950'>
      <button className="bg-green-400 px-4 py-2 m-5"
       onClick={async()=>{
        const data =await fetchPhotos('cat')
        console.log(data.results)
      }}>Get Photos</button>

      <button className="bg-green-400 px-4 py-2 m-5"
      onClick={async()=>{
        const data =await fetchVideos('dog')
        console.log(data.videos)
      }}>Get Videos</button>

      <button className="bg-green-400 px-4 py-2 m-5"
      onClick={async()=>{
        const data =await fetchVideos('cat')
        console.log(data.videos)
      }}>Get Gif</button>
    </div>
  )
}

export default App