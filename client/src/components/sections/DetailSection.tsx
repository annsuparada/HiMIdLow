import { Card } from '@mui/material'
import React from 'react'
import { darkBackground, lightPurple } from '../../theme'
import arrowIcon from '../../logo/arrows-repeat-solid.svg'
import pointerIcon from '../../logo/bullseye-pointer.svg'
import volumeUpIcon from '../../logo/volume-up.svg'
import quote from '../../logo/Quote.svg'
import MainWrapper from '../MainWrapper'
import { details } from '../../data'

interface DetailSectionProps {
  whatWeDoId: string
  membershipPerksId: string
}
const DetailSection: React.FC<DetailSectionProps> = ({
  whatWeDoId,
  membershipPerksId,
}) => {
  const styles = {
    container: {
      paddingTop: '4rem',
    },
    h1: { textAlign: 'center' as 'center', fontSize: '44px' },
    cardContainer: {
      maxWidth: '1300px',
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
    darkBackgroundContainer: {
      backgroundColor: darkBackground,
      width: '100%',
      marginTop: '5rem',
      paddingTop: '2rem',
      paddingBottom: '1rem',
    },
  }

  return (
    <div style={styles.container} id={whatWeDoId}>
      <h1 style={styles.h1}>A new way to do sound.</h1>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center' }}>
          HiMidLow is a sonic branding agency that brings your campaign to life
          by giving you the very best sound Hollywood has to offer! We
          specialize in high profile mixes, signature sounds and sonic identity.
          Even better, the way we do business makes the entire process faster,
          easier, and way less of a headache!
        </p>
      </div>
      <div style={styles.cardContainer}>
        <Card sx={styles.card}>
          <img src={pointerIcon} style={styles.icon} alt="arrow icon" />
          <p>Choose a plan and request as many mixes or edits as you'd like!</p>
        </Card>

        <Card sx={styles.card}>
          <img src={volumeUpIcon} style={styles.icon} alt="arrow icon" />
          <p>
            Get Your mixes fast! Usually within 1 to 3 business day. <br />
            Monday thru Friday.
          </p>
        </Card>

        <Card sx={styles.card}>
          <img src={arrowIcon} style={styles.icon} alt="arrow icon" />
          <p>
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
      <div style={styles.darkBackgroundContainer}>
        <MainWrapper backgroundColor={darkBackground}>
          <h1 style={styles.h1}>
            Sound so good, you'll <br />
            never go back!
          </h1>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ textAlign: 'center' }}>
              HiMidLow replaces unreliable freelancers and expensive studios for
              one flat monthly fee, and delivers mixes so good it’ll blow your
              mind!
            </p>
          </div>
          <div style={styles.cardContainer}>
            {details.map((el, index) => (
              <div style={{ padding: '10px' }} key={index}>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  {el.title}
                </p>
                <p>{el.description}</p>
              </div>
            ))}
          </div>
        </MainWrapper>
      </div>

      <div style={{ maxWidth: '600px', margin: '6rem auto 6rem' }}>
        <img src={quote} alt="quote icon" style={styles.quoteImage} />
        <div style={styles.quoteContainer}>
          <p style={{ textAlign: 'center' }}>You're a Wizard!</p>
          <p style={{ textAlign: 'center' }}>
            -Simon English @ Common Table Creative
          </p>
        </div>
      </div>

      <div style={styles.darkBackgroundContainer}>
        <MainWrapper backgroundColor={darkBackground}>
          <h1 style={styles.h1}>More than just mixes!</h1>
          <p style={{ textAlign: 'center' }}>Whatever you need, we got you!</p>
          <div style={styles.cardContainer}>
            <div>
              <p>Mixing</p>
              <p>Editorial</p>
              <p>Audio Repair</p>
              <p>Sound Design</p>
              <p>Signature Sounds</p>
            </div>
            <div>
              <p>Music mixing</p>
              <p>Podcast production</p>
              <p>Audio Consulting</p>
              <p>Composer referrals</p>
              <p>Foley</p>
            </div>
            <div>
              <p>ATMOS</p>
              <p>Binaural audio</p>
              <p>Game sound design</p>
              <p>Sonic Identity and Branding</p>
              <p>Scripted TV and Feature mixes</p>
            </div>
          </div>
        </MainWrapper>
      </div>
    </div>
  )
}

export default DetailSection
