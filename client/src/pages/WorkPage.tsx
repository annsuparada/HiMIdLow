import { Button, useMediaQuery } from '@mui/material'
import React from 'react'
import HadingTitle from '../components/HeadingTitle'
import MainWrapper from '../components/MainWrapper'
import NavBar from '../components/NavBar'
import ScrollToTop from '../components/ScrollToTop'
import VideoModal from '../components/VideoModal'
import { videoListWorkPage } from '../data'
import { background, mobileView, tabletView } from '../theme'

const WorkPage: React.FC = () => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const styles = {
    container: {
      display: 'grid',
      justifyContent: 'center',
      marginTop: '2rem',
      padding: '10px',
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
      gap: '20px',
    },
  }
  return (
    <>
      <NavBar pathname="work" />
      <HadingTitle
        title="Work"
        text="Exceptional Sound for Exceptional Brands"
      />
      <MainWrapper backgroundColor={background} minHeight="64vh">
        <ScrollToTop />
        <div style={styles.container}>
          <div style={styles.textContainer}>
            <h1>Check out some of our work!</h1>
          </div>

          <div style={styles.imgContainer}>
            {videoListWorkPage.map((item, index) => (
              <VideoModal
                key={index}
                imgUrl={item.imgUrl}
                alt={item.alt}
                videoUrl={item.videoUrl}
                displayIcon={true}
              />
            ))}
          </div>

          <Button
            href="/pricing"
            variant="contained"
            style={{ width: '200px', margin: '30px auto' }}
          >
            See our plans
          </Button>
        </div>
      </MainWrapper>
    </>
  )
}

export default WorkPage
