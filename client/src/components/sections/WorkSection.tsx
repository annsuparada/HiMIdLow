import React from 'react'
import VideoModal from '../VideoModal'
import { Button, useMediaQuery } from '@mui/material'
import { videoImgListHomePage, videoImgListMobile } from '../../data'
import { mobileView, tabletView } from '../../theme'

const WorkSection: React.FC = () => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)
  const styles = {
    container: {
      display: 'grid',
      justifyContent: 'center',
      marginTop: '2rem',
      padding: '5px',
    },
    textContainer: {
      maxWidth: '600px',
      margin: '0 auto',
    },
    imgContainer: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : isTablet
        ? '1fr 1fr'
        : 'repeat(4, 1fr)',
      gap: '10px',
    },
    img: {
      width: '100%',
      maxHeight: '495px',
    },
  }

  const videos = isMobile ? videoImgListMobile : videoImgListHomePage
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1>Check out some of our work!</h1>
      </div>

      <div style={styles.imgContainer}>
        {videos.map((item, index) => (
          <VideoModal
            key={index}
            imgUrl={item.imgUrl}
            alt={item.alt}
            videoUrl={item.videoUrl}
          />
        ))}
      </div>
      <Button
        href="/work"
        variant="contained"
        style={{ width: '200px', margin: '30px auto' }}
      >
        See more work
      </Button>
    </div>
  )
}

export default WorkSection
