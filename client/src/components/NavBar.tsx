import { Tab, Tabs, useMediaQuery } from '@mui/material'
import React from 'react'
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
  scrollToWhatWeDoOnClick: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void
  scrollToMemberShipPerksOnClick: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToWhatWeDoOnClick,
  scrollToMemberShipPerksOnClick,
}) => {
  const [value, setValue] = React.useState('work')
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)

  const styles = {
    navContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      justifycontent: 'space-between',
      paddingTop: '18px',
      // backgroundColor: isTablet ? 'red' : 'blue',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    tab: {
      color: darkFont,
      '&.Mui-selected': {
        fontWeight: 'bold',
      },
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
    moblieMenu: {
      // display: isTablet ? 'inline' : 'none',
      display: 'none',
    },
    tabDesktopView: {
      display: isTablet ? 'none' : 'inline',
    },
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  // console.log('is tablet', isTablet)
  return (
    <MainWrapper backgroundColor={background}>
      <div style={styles.navContainer}>
        <Link to="/">
          <img src={logo} alt="Low Mid Hight Logo" style={styles.logo} />
        </Link>
        <div style={styles.tabContainer}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            sx={styles.tabDesktopView}
          >
            <Tab
              value="work"
              label={
                <Link to="#work" style={styles.link}>
                  Work
                </Link>
              }
              sx={styles.tab}
            />
            <Tab
              value="what-we-do"
              label="What we do"
              sx={styles.tab}
              onClick={scrollToWhatWeDoOnClick}
            />
            <Tab
              value="benefits"
              label="Benefits"
              sx={styles.tab}
              onClick={scrollToMemberShipPerksOnClick}
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
              sx={styles.tab}
            />
          </Tabs>
          <div style={styles.moblieMenu}>
            <NavBarMobile />
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default NavBar
