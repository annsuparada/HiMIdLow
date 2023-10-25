import React from 'react'
import { darkBackground } from '../../theme'
import { brandingList, brandingListLastRow } from '../../data'

const BrandingSection: React.FC = () => {
  const styles = {
    container: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
      backgroundColor: darkBackground,
    },
    textContainer: {
      maxWidth: '500px',
      margin: '0 auto 60px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '20px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    gridLastRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
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
