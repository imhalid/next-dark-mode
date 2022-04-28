// import classNames from '../lib/classNames'

import { useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import axios from 'axios'

function PhotosPage() {
  const [photos, setPhotos] = useState([])

  const getPhotos = async () => {
    const key = process.env.NEXT_PUBLIC_UNSPLASH_key_ID

    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/users/halidislam/photos?client_id=VtBRCNVPaddBueKrJ7x-oTXu3fDbQiM_Y8PQ05_arcs`
      )
      setPhotos(data)
    } catch {
      console.log('error')
    }
  }

  useEffect(() => {
    getPhotos()
  }, [])

  if (!photos) {
    return <div>Loading...</div>
  }

  const photo = photos.map((data) => {
    return {
      src: data.urls.regular,
      width: data.width,
      height: data.height,
      class:
        'hover:brightness-110 hover:scale-[0.97] saturate-0 hover:saturate-100 transition',
    }
  })
  return (
    <div className="gap-32">
      <Gallery photos={photo} />
    </div>
  )
}

export default PhotosPage
