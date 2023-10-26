import { useMediaQuery } from '@mui/material'
import React from 'react'
import { desktopView, mobileView, tabletView } from '../theme'

interface HadingTitleProps {
  title: string
}
const HadingTitle: React.FC<HadingTitleProps> = ({ title }) => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const styles = {
    container: {
      maxWidth: desktopView,
    },
    h1: {
      color: 'white',
      fontSize: isMobile ? '1rem' : isTablet ? '1.5rem' : '2rem',
      margin: '0',
      padding: '15px',
      position: 'absolute' as 'absolute',
      transform: 'translate(0%, 0%)',
      zIndex: 1,
    },
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>{title}</h1>
      <img
        src="https://res.cloudinary.com/dejr86qx8/image/upload/v1698202248/Untitled_design_4_scxxoa.png"
        alt="mix sound"
        style={{ width: '100%' }}
      />
    </div>
  )
}

export default HadingTitle
