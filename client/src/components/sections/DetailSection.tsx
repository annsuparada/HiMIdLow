import { Button, Card } from '@mui/material'
import React from 'react'
import { darkBackground, lightPurple } from '../../theme'
import arrowIcon from '../../logo/arrows-repeat-solid.svg'
import pointerIcon from '../../logo/bullseye-pointer.svg'
import volumeUpIcon from '../../logo/volume-up.svg'
import quote from '../../logo/Quote.svg'
import MainWrapper from '../MainWrapper'
import { details, membershipPerks } from '../../data'

interface DetailSectionProps {
  scrollToMembershipOnClick: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void
  whatWeDoId: string
}
const DetailSection: React.FC<DetailSectionProps> = ({
  scrollToMembershipOnClick,
  whatWeDoId,
}) => {
  const styles = {
    container: {
      paddingTop: '4rem',
      paddingBottom: '7rem',
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
                <p style={{ fontWeight: 'bold' }}>{el.title}</p>
                <p style={{ fontSize: '20px' }}>{el.description}</p>
              </div>
            ))}
          </div>
        </MainWrapper>
      </div>

      <div style={{ maxWidth: '600px', margin: '6rem auto 6rem' }}>
        <img src={quote} alt="quote icon" style={styles.quoteImage} />
        <div style={styles.quoteContainer}>
          <p style={{ textAlign: 'center' }}>You're Wizard!</p>
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

      <div style={{ marginTop: '80px' }}>
        <h1 style={styles.h1}>Membership perks!</h1>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center' }}>
            Working with us is so seamless and easy, you’ll never need to go
            anywhere else.
          </p>
          <Button
            onClick={scrollToMembershipOnClick}
            variant="contained"
            size="large"
            sx={{ display: 'block', margin: '45px auto' }}
          >
            See our Plans
          </Button>
        </div>
      </div>

      <div style={styles.cardContainer}>
        {membershipPerks.map((el, index) => (
          <div style={{ padding: '0 10px' }} key={index}>
            <p style={{ fontWeight: 'bold' }}>{el.title}</p>
            <p style={{ fontSize: '20px' }}>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailSection
