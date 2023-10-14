import React from 'react'
import { darkBackground } from '../../theme'
import warnerBros from '../../branding/Warner_Bros_logo.svg.png'
const BrandingSection: React.FC = () => {
  const styles = {
    container: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
      backgroundColor: darkBackground,
    },
    textContainer: {
      maxWidth: '500px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '15px',
      maxWidth: '1150px',
      margin: '0 auto',
    },
  }

  const brandingList = [
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
    { src: warnerBros, alt: 'Warner Bros', width: '60px' },
  ]
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
    </div>
  )
}

export default BrandingSection
