// import classNames from '../lib/classNames'

import { useEffect, useState, useLayoutEffect } from 'react'
import { createApi } from 'unsplash-js'
import Masonry from 'react-masonry-css'
import NextImage from 'next/image'
import Link from 'next/link'
import axios from 'axios'

function PhotosPage() {
  const ACCESS = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_ID

  const baseURL = 'https://api.unsplash.com/users/halidislam/'
  const clientID = `client_id=${ACCESS}`
  const urlData = `${baseURL}photos?${clientID}`

  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)

  const getPhotos = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/users/halidislam/photos?client_id=${ACCESS}`
      )
      setPhotos(data)
      setLoading(false)
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
  const breakpointColsObj = {
    default: 3,
    1024: 3,
    720: 2,
    500: 1,
  }
  return (
    <Masonry
      breakpointCols={breakpointColsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {loading ? (
        <div className="text-center">
          <div className="spinner mx-auto" />
        </div>
      ) : (
        photos.map((item) => {
          return (
            <Link key={item.id} href={`https://unsplash.com/photos/${item.id}`}>
              <a target="_blank">
                <div className="cursor-pointer" key={`${item.id}`}>
                  <NextImage
                    className="hover:skew-x-4 transition-all  hover:brightness-110"
                    src={item.urls.regular}
                    alt={item.description}
                    width={item.width}
                    height={item.height}
                    layout="responsive"
                    blurDataURL={item.urls.thumb}
                    priority={item.id}
                  />
                </div>
              </a>
            </Link>
          )
        })
      )}
    </Masonry>
  )
}

export default PhotosPage
