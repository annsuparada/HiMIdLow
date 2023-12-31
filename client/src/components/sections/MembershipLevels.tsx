import { Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { darkBackground, mobileView } from '../../theme'
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
    tableGridDesktop: {
      maxWidth: '1083px',
      margin: '0 auto',
      display: isMobile ? 'none' : 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '2px solid #BCC0DA',
      borderLeft: '2px solid #BCC0DA',
      borderBottom: '2px solid #BCC0DA',
    },
    tableGridMobile: {
      maxWidth: '1083px',
      margin: '0 auto',
      display: isMobile ? 'grid' : 'none',
      gridTemplateColumns: '1fr',
      borderTop: '2px solid #BCC0DA',
      borderLeft: '2px solid #BCC0DA',
      borderBottom: '2px solid #BCC0DA',
    },
    gridItem: {
      backgroundColor: '#FAF6FA',
      padding: '15px',
      borderRight: '2px solid #BCC0DA',
    },
    gridItemMobile: {
      backgroundColor: '#FAF6FA',
      padding: '15px',
      borderRight: '2px solid #BCC0DA',
      borderBottom: '2px solid #BCC0DA',
    },
    lastItem: {
      backgroundColor: '#FAF6FA',
      gridColumn: 'span 3',
      borderRight: '2px solid #BCC0DA',
      borderTop: '2px solid #BCC0DA',
      padding: '15px',
    },
    p: {
      margin: '0px',
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
    },
    noMargin: {
      margin: '0px',
    },
  }

  return (
    <div id={membershipId}>
      <PageContainer backgroundColor={darkBackground} padding="3rem 0 8rem">
        <MainWrapper backgroundColor={darkBackground} padding="0 15px">
          <h1 style={styles.h1}>Membership Levels</h1>
          <p style={{ textAlign: 'center' }}>Choose your subscription plan!</p>
          <div style={styles.tableGridDesktop}>
            {/* titles */}
            <div style={styles.gridItem}>
              <h1>Standard</h1>
            </div>
            <div style={styles.gridItem}>
              <h1>Pro</h1>
            </div>
            <div style={styles.gridItem}>
              <h1>Need more?</h1>
            </div>

            {/* description */}
            <div style={styles.gridItem}>
              <p style={styles.p}>
                Standard is for small production companies and agencies that
                need small quantities of short form content edited and mixed
                monthly.
              </p>
            </div>
            <div style={styles.gridItem}>
              <p style={styles.p}>
                Pro is for mid-sized production companies and agencies that have
                several active productions.
              </p>
            </div>
            <div style={styles.gridItem}>
              <p style={styles.p}>
                If you’re a larger scale production company and need one of the
                following, let’s talk!
              </p>
            </div>

            {/* What you get! */}
            <div style={styles.gridItem}>
              <h2 style={styles.noMargin}>What you get!</h2>
            </div>
            <div style={styles.gridItem}>
              <h2 style={styles.noMargin}>What you get!</h2>
            </div>
            <div style={styles.gridItem}></div>

            {/* list */}
            <div style={styles.gridItem}>
              <ul>
                <li>Unlimited mixes and editorial.</li>
                <li>Unlimited revisions.</li>
                <li>Lightning fast turnaround. (usually 1-3 days)</li>
                <li>Unlimited projects in the backlog.</li>
                <li>Mixes in surround and stereo.</li>
                <li>Only 1 active project at a time.</li>
              </ul>
            </div>
            <div style={styles.gridItem}>
              <ul>
                <li>Unlimited mixes and editorial.</li>
                <li>Unlimited revisions.</li>
                <li>Lightning fast turnaround. (usually 1-3 days)</li>
                <li>Unlimited projects in the backlog.</li>
                <li>Mixes in surround and stereo.</li>
                <li>Up to 3 active project at a time.</li>
              </ul>
            </div>
            <div style={styles.gridItem}>
              <ul>
                <li>More than 4 active projects at a time.</li>
                <li>Campaign level sound design. Immediate turn around.</li>
                <li>Signature Sounds or Sonic logos.</li>
                <li>VO or Composer support.</li>
                <li> Mixes in Dolby ATMOS.</li>
                <li>You might even need less of us. No worries, let’s talk.</li>
              </ul>
            </div>

            {/* price */}
            <div style={styles.gridItem}>
              <div style={styles.priceBox}>
                <p style={styles.price}>
                  <span style={styles.span}>$5,000</span>/month
                </p>
              </div>
            </div>
            <div style={styles.gridItem}>
              <div style={styles.priceBox}>
                <p style={styles.price}>
                  <span style={styles.span}>$7,500</span>/month
                </p>
              </div>
            </div>
            <div style={styles.gridItem}>
              <div style={styles.priceBox}>
                <p style={styles.price}></p>
              </div>
            </div>

            {/* buttons */}
            <div style={styles.gridItem}>
              <Button
                variant="contained"
                sx={styles.button}
                href="https://calendly.com/himidlow"
                target="_blank"
              >
                Book a call
              </Button>
            </div>
            <div style={styles.gridItem}>
              <Button
                variant="contained"
                sx={styles.button}
                href="https://calendly.com/himidlow"
                target="_blank"
              >
                Book a call
              </Button>
            </div>
            <div style={styles.gridItem}>
              <Button
                variant="outlined"
                sx={styles.button}
                href="https://calendly.com/himidlow"
                target="_blank"
              >
                Book a call
              </Button>
            </div>

            {/* <div style={styles.lastItem}>
              <h1 style={styles.h1}>Refer a friend!</h1>
              <p style={{ textAlign: 'center' }}>
                Get a 5% monthly referral fee per production <br />
                that signs up because of your referral! <br />
                <span style={{ color: '#787B83' }}>
                  *terms and conditions may apply.
                </span>
              </p>
            </div> */}
          </div>

          <div style={styles.tableGridMobile}>
            {/* standard */}
            <div style={styles.gridItem}>
              <h1>Standard</h1>
            </div>
            <div style={styles.gridItem}>
              <p style={styles.p}>
                Standard is for small production companies and agencies that
                need small quantities of short form content edited and mixed
                monthly.
              </p>
            </div>
            <div style={styles.gridItem}>
              <h2 style={styles.noMargin}>What you get!</h2>
            </div>
            <div style={styles.gridItem}>
              <ul>
                <li>Unlimited mixes and editorial.</li>
                <li>Unlimited revisions.</li>
                <li>Lightning fast turnaround. (usually 1-3 days)</li>
                <li>Unlimited projects in the backlog.</li>
                <li>Mixes in surround and stereo.</li>
                <li>Only 1 active project at a time.</li>
              </ul>
            </div>

            <div style={styles.gridItem}>
              <div style={styles.priceBox}>
                <p style={styles.price}>
                  <span style={styles.span}>$5,000</span>/month
                </p>
              </div>
            </div>
            <div style={styles.gridItemMobile}>
              <Button
                variant="contained"
                sx={styles.button}
                href="https://calendly.com/himidlow"
                target="_blank"
              >
                Book a call
              </Button>
            </div>

            {/* pro */}
            <div style={styles.gridItem}>
              <h1>Pro</h1>
            </div>
            <div style={styles.gridItem}>
              <p style={styles.p}>
                Pro is for mid-sized production companies and agencies that have
                several active productions.
              </p>
            </div>
            <div style={styles.gridItem}>
              <h2 style={styles.noMargin}>What you get!</h2>
            </div>
            <div style={styles.gridItem}>
              <ul>
                <li>Unlimited mixes and editorial.</li>
                <li>Unlimited revisions.</li>
                <li>Lightning fast turnaround. (usually 1-3 days)</li>
                <li>Unlimited projects in the backlog.</li>
                <li>Mixes in surround and stereo.</li>
                <li>Up to 3 active project at a time.</li>
              </ul>
            </div>
            <div style={styles.gridItem}>
              <div style={styles.priceBox}>
                <p style={styles.price}>
                  <span style={styles.span}>$7,500</span>/month
                </p>
              </div>
            </div>
            <div style={styles.gridItemMobile}>
              <Button
                variant="contained"
                sx={styles.button}
                href="https://calendly.com/himidlow"
                target="_blank"
              >
                Book a call
              </Button>
            </div>

            {/* more */}
            <div style={styles.gridItem}>
              <h1>Need more?</h1>
            </div>
            <div style={styles.gridItem}>
              <p style={styles.p}>
                If you’re a larger scale production company and need one of the
                following, let’s talk!
              </p>
            </div>
            <div style={styles.gridItem}>
              <ul>
                <li>More than 4 active projects at a time.</li>
                <li>Campaign level sound design. Immediate turn around.</li>
                <li>Signature Sounds or Sonic logos.</li>
                <li>VO or Composer support.</li>
                <li> Mixes in Dolby ATMOS.</li>
                <li>You might even need less of us. No worries, let’s talk.</li>
              </ul>
            </div>
            <div style={styles.gridItem}>
              <div style={styles.priceBox}>
                <p style={styles.price}></p>
              </div>
            </div>
            <div style={styles.gridItem}>
              <Button
                variant="outlined"
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
