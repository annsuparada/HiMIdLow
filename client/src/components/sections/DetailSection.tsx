import { Card } from '@mui/material'
import React from 'react'
import { lightPurple } from '../../theme'
import arrowIcon from '../../logo/arrows-repeat-solid.svg'
import pointerIcon from '../../logo/bullseye-pointer.svg'
import volumeUpIcon from '../../logo/volume-up.svg'
import quote from '../../logo/Quote.svg'

const DetailSection: React.FC = () => {
  const styles = {
    container: {
      paddingTop: '4rem',
      paddingBottom: '7rem',
    },
    cardContainer: {
      maxWidth: '1200px',
      margin: '4rem auto 8rem',
      display: 'grid',
      gap: '2.5rem',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    icon: {
      width: '4rem',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
    },
    card: {
      maxWidth: '362px',
      backgroundColor: lightPurple,
      padding: '35px',
      borderRadius: '10px',
      boxShadow: '0 6px 45px 0px #261AAB33',
    },
    p: {
      fontSize: '18px',
    },
    quoteImage: {
      position: 'absolute' as 'absolute',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
    },
    quoteContainer: {
      position: 'relative' as 'relative',
      maxWidth: '963px',
      backgroundColor: '#FEE1FF',
      margin: '0 auto',
      padding: '2rem',
      borderRadius: '5px',
      overflow: 'hidden',
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={{ marginBottom: 0, textAlign: 'center' }}>
        A new way to do sound.
      </h1>
      <p style={{ textAlign: 'center' }}>
        Easier, Faster, and way less of a heache!
      </p>
      <div style={styles.cardContainer}>
        <Card sx={styles.card}>
          <img src={pointerIcon} style={styles.icon} alt="arrow icon" />
          <p style={styles.p}>
            Choose a plan and request as many mixes or edits as you'd like!
          </p>
        </Card>

        <Card sx={styles.card}>
          <img src={volumeUpIcon} style={styles.icon} alt="arrow icon" />
          <p style={styles.p}>
            Get Your mixes fast! Usually within 1 to 3 business day. <br />
            Monday thru Friday.
          </p>
        </Card>

        <Card sx={styles.card}>
          <img src={arrowIcon} style={styles.icon} alt="arrow icon" />
          <p style={styles.p}>
            We'll adress any notes quickly until you're 100% satified.
            <br />
            Guaranteed!
          </p>
        </Card>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <img src={quote} alt="quote icon" style={styles.quoteImage} />
        <div style={styles.quoteContainer}>
          <p>
            ...meticulous, methodical and able to handle the entire sound
            pagkage, from design, mix and mastering. The project cam out great!
          </p>
          <p style={{ textAlign: 'center' }}>-Lorne Hiltser COO @HKCorp</p>
        </div>
      </div>
    </div>
  )
}

export default DetailSection
