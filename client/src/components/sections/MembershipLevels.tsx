import { Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { pricing } from '../../data'
import {
  darkBackground,
  darkFont,
  mobileView,
  offWhite,
  white,
} from '../../theme'
import MainWrapper from '../MainWrapper'
import PageContainer from '../PageContainer'

interface MembershipLevelsProps {
  membershipId: string
}
const MembershipLevels: React.FC<MembershipLevelsProps> = ({
  membershipId,
}) => {
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const styles = {
    h1: {
      fontSize: '44px',
      textAlign: 'center' as 'center',
    },
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '30px',
    },
    pringGridItem: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      border: '2px solid #BCC0DA',
      backgroundColor: '#FAF6FA',
      padding: '20px',
      borderRadius: '10px',
    },
    midGridItem: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      backgroundColor: darkFont,
      padding: '20px',
      borderRadius: '10px',
      position: 'relative' as 'relative',
    },
    gridItem: {
      backgroundColor: '#FAF6FA',
      padding: '15px',
      borderRight: '2px solid #BCC0DA',
    },
    p: {
      margin: '0px',
    },
    midP: {
      margin: '0px',
      color: offWhite,
    },
    priceBox: {
      marginTop: '60px',
    },
    span: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    price: {
      textAlign: 'center' as 'center',
    },
    button: {
      display: 'block',
      margin: '15px auto',
      width: '138px',
      height: '43px',
    },
    whiteButton: {
      display: 'block',
      margin: '15px auto',
      width: '138px',
      height: '43px',
      color: darkFont,
      backgroundColor: offWhite,
    },

    ul: {
      paddingTop: '30px',
    },
    bestValue: {
      height: '30px',
      backgroundColor: 'red',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      width: '100%',
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    bestValueText: {
      textAlign: 'center' as 'center',
      margin: '2px',
      color: offWhite,
      fontWeight: 'bold',
    },
  }

  return (
    <div id={membershipId}>
      <PageContainer backgroundColor={darkBackground} padding="3rem 0 8rem">
        <MainWrapper backgroundColor={darkBackground}>
          <h1 style={styles.h1}>Membership Levels</h1>
          <p style={{ textAlign: 'center', paddingBottom: '20px' }}>
            Choose your subscription plan!
          </p>
          <div style={styles.pricingGrid}>
            {/* Standard */}
            <div style={styles.pringGridItem}>
              <h1>{pricing[0].type}</h1>
              <p style={styles.p}>{pricing[0].description}</p>
              <ul style={styles.ul}>
                {pricing[0].options.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div style={styles.priceBox}>
                <p style={styles.price}>
                  <span style={styles.span}>{pricing[0].price}</span>/month
                </p>
              </div>
              <Button
                variant="contained"
                sx={styles.button}
                href="https://calendly.com/himidlow"
                target="_blank"
              >
                Book a call
              </Button>
            </div>

            {/* Pro */}
            {/* <div> */}
            <div style={styles.midGridItem}>
              <div style={styles.bestValue}>
                <p style={styles.bestValueText}>Best Value</p>
              </div>
              <h1 style={{ color: offWhite, marginTop: '35px' }}>
                {pricing[1].type}
              </h1>
              <p style={styles.midP}>{pricing[1].description}</p>
              <ul style={styles.ul}>
                {pricing[1].options.map((item, index) => (
                  <li key={index} style={{ color: offWhite }}>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={styles.priceBox}>
                <p style={{ textAlign: 'center', color: offWhite }}>
                  <span style={styles.span}>{pricing[1].price}</span>/month
                </p>
              </div>
              <Button
                variant="contained"
                sx={{
                  ...styles.whiteButton,
                  '&:hover': {
                    backgroundColor: white,
                  },
                }}
                href="https://calendly.com/himidlow"
                target="_blank"
              >
                Book a call
              </Button>
            </div>
            {/* </div> */}

            {/* Need More */}
            <div style={styles.pringGridItem}>
              <h1>{pricing[2].type}</h1>
              <p style={styles.p}>{pricing[2].description}</p>
              <ul style={styles.ul}>
                {pricing[2].options.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div style={styles.priceBox}>{/* no price */}</div>
              <Button
                variant="contained"
                sx={styles.button}
                href="https://calendly.com/himidlow"
                target="_blank"
              >
                Book a call
              </Button>
            </div>
          </div>
        </MainWrapper>
      </PageContainer>
    </div>
  )
}

export default MembershipLevels
