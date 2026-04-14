import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY


export async function fetchPhotos(query,page=1,per_page=20){
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })

    return res.data
}

export async function fetchVideos(query,per_page=15){
    const res = await axios.get('https://api.pexels.com/v1/videos/search',{
        params:{query,per_page},
        headers:{Authorization:PEXELS_KEY}
    })

    return res.data
}

export async function fetchGif(query,per_page=15){
    const res = await axios.get('https://api.pexels.com/v1/videos/search',{
        params:{query,per_page},
        headers:{Authorization:PEXELS_KEY}
    })

    return res.data
}

export function getPlayableVideoFile(videoFiles = []) {
    const mp4Files = videoFiles.filter((file) => file.file_type === 'video/mp4')

    if (!mp4Files.length) return ''

    const preferredFile =
        mp4Files.find((file) => file.width >= 720 && file.width <= 1280) ||
        mp4Files.find((file) => file.width >= 480) ||
        mp4Files[0]

    return preferredFile.link
}
