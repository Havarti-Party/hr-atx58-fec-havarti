import React, { useState, useEffect, useContext } from 'react';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import { ProductsContext } from './ProductsContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MainImageCarousel({photos}) {
  const imageHeight = '625px';
  const parsedPhotos = [];
  const { overviewProduct } = useContext(ProductsContext)
  const [ overviewProductState, setOverviewProductState ] = overviewProduct;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [overviewProductState])
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
      startIndex={currentImageIndex}
      onThumbnailClick={(event, i) => {
        setCurrentImageIndex(i)
      }}
      useBrowserFullscreen={false}
    />
  )
}
