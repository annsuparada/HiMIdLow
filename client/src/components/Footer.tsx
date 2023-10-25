import React from 'react'
import { darkFont, mobileView, white } from '../theme'
import MainWrapper from './MainWrapper'
import PageContainer from './PageContainer'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'

const Footer: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)
  const styles = {
    text: {
      color: white,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
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
            <img
              src="https://res.cloudinary.com/dejr86qx8/image/upload/v1698197299/LosAngeles_White_drqvuo.png"
              alt="logo"
            />
          </div>
          <div style={styles.gridItem}>
            <p style={styles.text}>
              HiMidLow is proud to support the <br />
              Motion Picture Editors Guild and the <br />
              Cinema Audio Society!
            </p>
            <div>
              <Link to="/" style={styles.icon}>
                HOME
              </Link>
              <Link to="/terms-and-conditions">T.O.S.</Link>
            </div>
          </div>
          <div style={styles.gridItem}>
            <p style={styles.text}>
              Contact: <br />
              email:{' '}
              <Link to="mailto:andy@himidlow.com">andy@himidlow.com</Link>{' '}
              <br />
              phone: <Link to="tel:+13236128138">323.612.8138</Link>
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
