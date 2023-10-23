import React from 'react'
import { darkFont, white } from '../theme'
import MainWrapper from './MainWrapper'
import PageContainer from './PageContainer'
import LaLogo from '../logo/los-angeles.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Link } from 'react-router-dom'

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
      textDecoration: 'none',
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
              email:{' '}
              <Link to="mailto:andy@himidlow.com" style={styles.icon}>
                andy@himidlow.com
              </Link>{' '}
              <br />
              phone:{' '}
              <Link to="tel:+13236128138" style={styles.icon}>
                323.612.8138
              </Link>
            </p>
            <div>
              <Link
                to="https://www.linkedin.com/company/hi-mid-low/"
                target="_blank"
              >
                <LinkedInIcon style={styles.icon} />
              </Link>
              <Link
                to="https://www.threads.net/@himidlow_agency"
                target="_blank"
              >
                <AlternateEmailIcon style={styles.icon} />
              </Link>
              <Link
                to="https://www.instagram.com/himidlow_agency/"
                target="_blank"
              >
                <InstagramIcon style={styles.icon} />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61552490501398"
                target="_blank"
              >
                <FacebookIcon style={styles.icon} />
              </Link>
            </div>
          </div>
        </div>
      </MainWrapper>
    </PageContainer>
  )
}

export default Footer
