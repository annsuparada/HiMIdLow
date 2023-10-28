import { Card, useMediaQuery } from '@mui/material'
import React from 'react'
import { darkBackground, lightPurple, tabletView } from '../../theme'
import quote from '../../logo/Quote.svg'
import MainWrapper from '../MainWrapper'
import { details, scopeList } from '../../data'

interface DetailSectionProps {
  whatWeDoId: string
}
const DetailSection: React.FC<DetailSectionProps> = ({ whatWeDoId }) => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)

  const styles = {
    container: {},
    h1: { textAlign: 'center' as 'center', fontSize: '44px' },
    cardContainer: {
      maxWidth: isTablet ? '360px' : '1300px',
      margin: '4rem auto 8rem',
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: isTablet ? '1fr' : 'repeat(3, 1fr)',
      padding: '0 10px',
    },
    icon: {
      width: '5rem',
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
      margin: '0 auto',
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
    scopeCard: {
      width: '300px',
      backgroundColor: lightPurple,
      padding: '25px',
      borderRadius: '10px',
      boxShadow: '0 6px 45px 0px #261AAB33',
      margin: '0 auto',
    },
    mixingList: { margin: isTablet ? '5px auto' : '5px 15px' },
  }

  return (
    <div style={styles.container} id={whatWeDoId}>
      <h1 style={styles.h1}>A new way to do sound.</h1>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 10px' }}>
        <p style={{ textAlign: 'center' }}>
          HiMidLow is a sonic branding agency that brings your campaign to life
          by giving you the very best sound Hollywood has to offer! We
          specialize in high-profile mixes, signature sounds, and sonic
          identity. Even better, the way we do business makes the entire process
          faster, easier, and way less of a headache!
        </p>
      </div>
      <div style={styles.cardContainer}>
        <Card sx={styles.card}>
          <img
            src="https://res.cloudinary.com/dejr86qx8/image/upload/v1698367544/bullseye-pointer_1_jgls7o.png"
            style={styles.icon}
            alt="arrow icon"
          />
          <p>Choose a plan and request as many mixes or edits as you'd like!</p>
        </Card>

        <Card sx={styles.card}>
          <img
            src="https://res.cloudinary.com/dejr86qx8/image/upload/v1698367538/Recycle_zjwmim.png"
            style={styles.icon}
            alt="arrow icon"
          />
          <p>
            Get Your mixes fast! Usually within 1 to 3 business day. <br />
            Monday thru Friday.
          </p>
        </Card>

        <Card sx={styles.card}>
          <img
            src="https://res.cloudinary.com/dejr86qx8/image/upload/v1698367538/Recycle_zjwmim.png"
            style={styles.icon}
            alt="arrow icon"
          />
          <p>
            We'll adress any notes quickly until you're 100% satified.
            <br />
            Guaranteed!
          </p>
        </Card>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 45px ' }}>
        <img src={quote} alt="quote icon" style={styles.quoteImage} />
        <div style={styles.quoteContainer}>
          <p>
            ...meticulous, methodical and able to handle the entire sound
            pagkage, from design, mix and mastering. The project came out great!
          </p>
          <p style={{ textAlign: 'center' }}>-Lorne Hiltser COO @HKCorp</p>
        </div>
      </div>

      <div style={styles.darkBackgroundContainer}>
        <MainWrapper backgroundColor={darkBackground}>
          <h1 style={styles.h1}>Sound so good, you'll never go back!</h1>
          <div
            style={{ maxWidth: '600px', margin: '0 auto', padding: '0 10px' }}
          >
            <p style={{ textAlign: 'center' }}>
              HiMidLow replaces unreliable freelancers and expensive studios for
              one flat monthly fee, and delivers mixes so good it’ll blow your
              mind!
            </p>
          </div>
          <div style={styles.cardContainer}>
            {details.map((el, index) => (
              <div
                style={{ padding: '10px', maxWidth: '450px', margin: '0 auto' }}
                key={index}
              >
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  {el.title}
                </p>
                <p>{el.description}</p>
              </div>
            ))}
          </div>
        </MainWrapper>
      </div>

      <div
        style={{
          maxWidth: '600px',
          margin: '6rem auto 6rem',
          padding: '0 45px',
        }}
      >
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
            {scopeList.map((i, index) => (
              <>
                {i.col === 1 ? <p style={styles.mixingList}>{i.item}</p> : null}
              </>
            ))}
            {scopeList.map((i, index) => (
              <>
                {i.col === 2 ? <p style={styles.mixingList}>{i.item}</p> : null}
              </>
            ))}
            {scopeList.map((i, index) => (
              <>
                {i.col === 3 ? <p style={styles.mixingList}>{i.item}</p> : null}
              </>
            ))}
          </div>
        </MainWrapper>
      </div>
    </div>
  )
}

export default DetailSection
