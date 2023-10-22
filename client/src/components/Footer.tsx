import React from 'react'
import { darkFont, white } from '../theme'
import MainWrapper from './MainWrapper'
import PageContainer from './PageContainer'
import LaLogo from '../logo/los-angeles.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

const Footer: React.FC = () => {
  const styles = {
    text: {
      color: white,
      fontSize: '18px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px',
    },
    gridItem: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '15px',
    },
    icon: {
      color: white,
      marginRight: '25px',
    },
  }

  return (
    <PageContainer backgroundColor={darkFont} padding="20px">
      <MainWrapper backgroundColor={darkFont}>
        <div style={styles.grid}>
          <div style={styles.gridItem}>
            <p style={styles.text}>HiMidLow is located in sunny SoCal.</p>
            <img src={LaLogo} alt="logo" />
          </div>
          <div style={styles.gridItem}>
            <p style={styles.text}>
              HiMidLow is proud to support the <br />
              Motion Picture Editors guild and the <br />
              Cinema Audio Society!
            </p>
            <p style={styles.text}>
              <span style={{ marginRight: '25px' }}>T.O.S.</span>
              Privacy Policy
            </p>
          </div>
          <div style={styles.gridItem}>
            <p style={styles.text}>
              Contact: <br />
              email: andy@himidlow.com <br />
              phone: 323.612.8138
            </p>
            <div>
              <LinkedInIcon style={styles.icon} />
              <AlternateEmailIcon style={styles.icon} />
              <InstagramIcon style={styles.icon} />
            </div>
          </div>
        </div>
      </MainWrapper>
    </PageContainer>
  )
}

export default Footer
