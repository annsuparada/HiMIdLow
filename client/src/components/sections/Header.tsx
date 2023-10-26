import { Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { mobileView, tabletView } from '../../theme'

interface HeaderProps {
  scrollToMembershipOnClick: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void
}
const Header: React.FC<HeaderProps> = ({ scrollToMembershipOnClick }) => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const styles = {
    container: {
      display: 'grid',
      jestifyContent: 'center',
      paddingTop: '4rem',
    },
    bigText: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    smallText: {
      maxWidth: '400px',
      margin: '0 auto',
    },
    button: {
      width: '200px',
      margin: '0 auto',
      height: '55px',
    },
    h1: {
      fontSize: isMobile ? '30px' : isTablet ? '44px' : '64px',
      margin: '1rem',
      // textAlign: 'center' as 'center',
    },
    p: {
      fontSize: '24px',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.bigText}>
        <h1 style={styles.h1}>Sonic branding done differently!</h1>
      </div>
      <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
        <p style={styles.p}>
          Expand your reach with world-class sound for a flat monthly fee.
        </p>
      </div>
      <Button
        variant="contained"
        onClick={scrollToMembershipOnClick}
        style={styles.button}
      >
        See our Plans
      </Button>
      <div style={styles.smallText}>
        <p style={styles.p}>You'll love us, guaranteed.</p>
      </div>
    </div>
  )
}

export default Header
