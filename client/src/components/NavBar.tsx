import { Tab, Tabs, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  background,
  darkBotton,
  darkFont,
  primary,
  tabletView,
  white,
} from '../theme'
import MainWrapper from './MainWrapper'
import logo from '../logo/LargeLogoBlack.svg'
import NavBarMobile from './NavBarMobile'

interface NavBarProps {
  pathname: string
}

const NavBar: React.FC<NavBarProps> = ({ pathname }) => {
  const [value, setValue] = useState(pathname)
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const styles = {
    navContainer: {
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : 'repeat(2, 1fr)',
      justifycontent: isTablet ? 'center' : 'space-between',
      padding: '18px 5px 0',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: isTablet ? 'center' : 'flex-end',
    },
    tab: {
      color: darkFont,
      '&.Mui-selected': {
        fontWeight: 'bold',
      },
    },
    desktopTab: {
      color: darkFont,
      '&.Mui-selected': {
        fontWeight: 'bold',
      },
      display: isTablet ? 'none' : 'in-line',
    },
    link: {
      color: darkFont,
      textDecoration: 'none',
    },
    botton: {
      color: darkBotton,
    },
    linkBotton: {
      color: white,
      textDecoration: 'none',
      backgroundColor: primary,
      padding: '10px',
      borderRadius: '3px',
    },
    logo: {
      width: '150px',
      paddingTop: '20px',
    },
    logoContainer: {
      display: 'flex',
      justifyContent: isTablet ? 'center' : 'left',
    },
    moblieMenu: {
      display: 'none',
    },
    moblieViewTab: {
      maxWidth: '100%',
      display: isTablet ? 'flex' : 'none',
      justifyContent: 'center',
    },
  }
  return (
    <MainWrapper backgroundColor={background}>
      <div style={styles.navContainer} className="nav-container">
        <div style={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="Low Mid Hight Logo" style={styles.logo} />
          </Link>
        </div>
        <div style={styles.tabContainer}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab
              value="work"
              label={
                <Link to="/work" style={styles.link}>
                  Work
                </Link>
              }
              sx={styles.tab}
            />
            <Tab
              value="what-we-do"
              label={
                <Link to="/what-we-do" style={styles.link}>
                  What we do
                </Link>
              }
              sx={styles.tab}
            />
            <Tab
              value="pricing"
              label={
                <Link to="/pricing" style={styles.link}>
                  Pricing
                </Link>
              }
              sx={styles.tab}
            />
            <Tab
              value="contact"
              label={
                <Link
                  to="https://calendly.com/himidlow"
                  target="_blank"
                  style={styles.linkBotton}
                >
                  Let's talk
                </Link>
              }
              sx={styles.desktopTab}
            />
          </Tabs>
        </div>
        {/* tablet/moblie */}
        <div style={styles.moblieViewTab}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab
              value="contact"
              label={
                <Link
                  to="https://calendly.com/himidlow"
                  target="_blank"
                  style={styles.linkBotton}
                >
                  Let's talk
                </Link>
              }
              sx={styles.tab}
            />
          </Tabs>
        </div>
        <NavBarMobile />
      </div>
    </MainWrapper>
  )
}

export default NavBar
