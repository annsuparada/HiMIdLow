import React from 'react'
import VideoModal from '../VideoModal'
import { Button } from '@mui/material'
import { videoImgListHomePage } from '../../data'

const WorkSection: React.FC = () => {
  const styles = {
    container: {
      display: 'grid',
      justifyContent: 'center',
      marginTop: '2rem',
    },
    textContainer: {
      maxWidth: '600px',
      margin: '0 auto',
    },
    imgContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '10px',
    },
    img: {
      width: '100%',
      maxHeight: '495px',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1>Check out some of our work!</h1>
      </div>

      <div style={styles.imgContainer}>
        {videoImgListHomePage.map((item, index) => (
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
        See more works
      </Button>
    </div>
  )
}

export default WorkSection
