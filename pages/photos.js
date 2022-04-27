// import classNames from '../lib/classNames'

import { useEffect, useState, useLayoutEffect } from 'react'
import { createApi } from 'unsplash-js'
import Masonry from 'react-masonry-css'
import NextImage from 'next/image'
import Link from 'next/link'

function PhotosPage() {
  const ACCESS = process.env.UNSPLASH_ACCESS_ID

  const baseURL = 'https://api.unsplash.com/users/halidislam/'
  const clientID = `client_id=${ACCESS}`
  const urlData = `${baseURL}photos?${clientID}`

  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)

  const unsplash = createApi({
    accessKey: 'VtBRCNVPaddBueKrJ7x-oTXu3fDbQiM_Y8PQ05_arcs',
  })

  useEffect(() => {
    unsplash.users.getPhotos({ username: 'halidislam' }).then((result) => {
      if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0])
      } else {
        const feed = result.response

        // extract total and results array from response
        const { total, results } = feed
        setPhotos(results)
        setLoading(false)
        // handle success here
        console.log(`received ${results.length} photos out of ${total}`)
        console.log('first photo: ', results[0].urls)
      }
    })
  }, [])
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Masonry
      breakpointCols={3}
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
                    className="hover:skew-x-4 blur-[1px] transition-all hover:blur-none hover:brightness-110"
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
