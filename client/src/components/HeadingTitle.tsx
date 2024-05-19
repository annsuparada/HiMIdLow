import { useMediaQuery } from '@mui/material'
import React from 'react'
import { darkFont, desktopView, mobileView, white } from '../theme'

interface HadingTitleProps {
  title?: string
  text?: string
}
const HadingTitle: React.FC<HadingTitleProps> = ({ title, text }) => {
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const styles = {
    container: {
      width: '100%',
      backgroundColor: darkFont,
    },
    wrapper: {
      maxWidth: desktopView,
      margin: '0 auto',
      padding: isMobile ? '4rem 1rem' : '5rem 2rem',
    },
    textContainer: {
      maxWidth: '800px',
    },
    h1: {
      color: white,
      fontSize: 'clamp(2rem, 10vw, 3.5rem)',
      margin: '0',
      padding: '5px',
      textAlign: 'left' as 'left',
    },
    h2: {
      color: white,
      textAlign: 'left' as 'left',
      margin: '0',
      padding: '5px',
      fontSize: '1.5rem',
    },
  }
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.textContainer}>
          <h2 style={styles.h2}>{title}</h2>
          <h1 style={styles.h1}>{text}</h1>
        </div>
      </div>
    </div>
  )
}

export default HadingTitle
