import React from 'react'

interface HadingTitleProps {
  title: string
}
const HadingTitle: React.FC<HadingTitleProps> = ({ title }) => {
  const styles = {
    container: {
      position: 'relative' as 'relative',
    },
    h1: {
      position: 'absolute' as 'absolute',
      top: '1rem',
      left: '2rem',
      color: 'white',
      fontSize: '44px',
    },
  }
  return (
    <div style={styles.container}>
      <img
        src="https://res.cloudinary.com/dejr86qx8/image/upload/v1698202248/Untitled_design_4_scxxoa.png"
        alt="mix sound"
        style={{ width: '100%' }}
      />
      <h1 style={styles.h1}>{title}</h1>
    </div>
  )
}

export default HadingTitle
