import React from 'react'
import { darkBackground, mobileView, tabletView } from '../../theme'
import { brandingList, brandingListLastRow } from '../../data'
import { useMediaQuery } from '@mui/material'

const BrandingSection: React.FC = () => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const styles = {
    container: {
      padding: '3rem 15px 3rem',
      backgroundColor: darkBackground,
    },
    textContainer: {
      maxWidth: '500px',
      margin: '0 auto 60px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? 'repeat(3, 1fr)'
        : isTablet
        ? 'repeat(4, 1fr)'
        : 'repeat(6, 1fr)',
      gap: '20px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    gridLastRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
      gap: '20px',
      maxWidth: '700px',
      margin: '20px auto',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1>We work with some of the best!</h1>
      </div>
      <div style={styles.grid}>
        {brandingList.map((item, index) => (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            style={{ width: item.width }}
          />
        ))}
      </div>
      <div style={styles.gridLastRow}>
        {brandingListLastRow.map((item, index) => (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            style={{ width: item.width }}
          />
        ))}
      </div>
    </div>
  )
}

export default BrandingSection
