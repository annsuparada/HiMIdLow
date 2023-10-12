import { Button } from '@mui/material'
import React from 'react'

const Header: React.FC = () => {
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
      fontSize: '64px',
      fontWeigh: 'bold',
      margin: '1rem',
    },
    p: {
      fontSize: '24px',
    },
  }
  return (
    <div style={styles.container}>
      <div style={styles.bigText}>
        <h1 style={styles.h1}>Sonic brading done differently!</h1>
      </div>
      <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
        <p style={styles.p}>
          Expand your reach with wold class sound for a flat monthly fee.
        </p>
      </div>
      <Button variant="contained" style={styles.button}>
        See our Plans
      </Button>
      <div style={styles.smallText}>
        <p style={styles.p}>You'll love us, guarnteed.</p>
      </div>
    </div>
  )
}

export default Header
