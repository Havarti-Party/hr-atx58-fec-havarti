import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";


export default function MainImageCarousel({photos}) {
  const imageHeight = '625px';
  const parsedPhotos = [];

  const imageParse = ((selectedStylePhotos) => {
    selectedStylePhotos.map(photoObj => {
      parsedPhotos.push({
        original: photoObj.url,
        thumbnail: photoObj.thumbnail_url,
        originalHeight: imageHeight
      })
    })
  })(photos)

  return (
    <ImageGallery
      items={parsedPhotos}
      thumbnailPosition={'left'}
      originalHeight={'50px'}
      showPlayButton={false}
      showBullets={true}
      infinite={false}
    />
  )
}
