import React from 'react'
import { darkFont, desktopView, white } from '../theme'
import MainWrapper from './MainWrapper'

interface HadingTitleProps {
  title: string
  text?: string
}
const HadingTitle: React.FC<HadingTitleProps> = ({ title, text }) => {
  const styles = {
    container: {
      width: '100%',
      padding: '5rem 15px 5rem',
      backgroundColor: darkFont,
      // backgroundImage: 'linear-gradient(to bottom, #21232a 50%, #4c4d55, #7b7c84, #adafb6, #e3e4eb)',
    },
    wrapper: {
      maxWidth: desktopView,
      margin: '0 auto',
    },
    textContainer: {
      maxWidth: '800px',
    },
    h1: {
      color: white,
      fontSize: 'clamp(2rem, 10vw, 4rem)',
      margin: '0',
      padding: '5px',
      textAlign: 'left' as 'left',
    },
    h2: {
      color: white,
      textAlign: 'left' as 'left',
      margin: '0',
      padding: '5px',
      fontSize: '2rem',
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
