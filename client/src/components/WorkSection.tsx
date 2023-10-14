import React from 'react'
import great from '../img/great.jpg'
import modok from '../img/modok.jpg'
import woke from '../img/Woke.jpg'
import dopesick from '../img/dopesick.jpg'
import VideoModal from './VideoModal'

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

  const videoImgList = [
    {
      imgUrl: great,
      imgHeight: '495px',
      alt: 'The Great',
      videoUrl:
        'https://www.youtube.com/watch?v=MXy4PsQ2ymI&ab_channel=ONEMedia',
    },
    {
      imgUrl: modok,
      imgHeight: '495px',
      alt: 'MODOK',
      videoUrl:
        'https://www.youtube.com/watch?v=MXy4PsQ2ymI&ab_channel=ONEMedia',
    },
    {
      imgUrl: woke,
      imgHeight: '495px',
      alt: 'WOKE',
      videoUrl:
        'https://www.youtube.com/watch?v=MXy4PsQ2ymI&ab_channel=ONEMedia',
    },
    {
      imgUrl: dopesick,
      imgHeight: '495px',
      alt: 'Dopesick',
      videoUrl:
        'https://www.youtube.com/watch?v=MXy4PsQ2ymI&ab_channel=ONEMedia',
    },
  ]
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1>Check out some of our work!</h1>
      </div>

      <div style={styles.imgContainer}>
        {videoImgList.map((item, index) => (
          <VideoModal
            key={index}
            imgUrl={item.imgUrl}
            imgHeight={item.imgHeight}
            alt={item.alt}
            videoUrl={item.videoUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkSection
