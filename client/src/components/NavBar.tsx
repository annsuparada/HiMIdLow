import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import logo from '../logo/LargeLogoWhite.svg'
import MainWrapper from './MainWrapper'
import { darkFont, primary, tabletView, white } from '../theme'
import NavBarMobile from './NavBarMobile'
import PageContainer from './PageContainer'

interface NavBarProps {
  pathname: string
}

interface TabLinkProps {
  pathname: string
  label: string
  value: string
}
const TabLink: React.FC<TabLinkProps> = ({ pathname, label, value }) => {
  const styles = {
    tab: {
      color: white,
      padding: '10px',
      textDecoration: 'none',
    },
  }
  return (
    <Link
      to={`/${value}`}
      style={{
        ...styles.tab,
        borderBottom: value === pathname ? `2px solid ${white}` : 'none',
        fontWeight: value === pathname ? 'bold' : 'normal',
      }}
    >
      {label}
    </Link>
  )
}

const NavBar: React.FC<NavBarProps> = ({ pathname }) => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)

  const styles = {
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    tabContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    desktopTab: {
      display: isTablet ? 'none' : 'flex',
    },
    linkButton: {
      color: 'white',
      textDecoration: 'none',
      backgroundColor: primary,
      padding: '10px',
      borderRadius: '3px',
      marginLeft: '7px',
    },
    logo: {
      width: '150px',
      padding: '10px 0',
    },
    mobileViewTab: {
      display: isTablet ? 'flex' : 'none',
    },
  }

  return (
    <PageContainer backgroundColor={darkFont}>
      <MainWrapper backgroundColor={darkFont}>
        <div style={styles.navContainer} className="nav-container">
          <Link to="/">
            <img src={logo} alt="Low Mid High Logo" style={styles.logo} />
          </Link>
          <div style={styles.tabContainer}>
            <div style={styles.desktopTab}>
              <nav>
                <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                  <li>
                    <TabLink pathname={pathname} label="Work" value="work" />
                  </li>
                  <li>
                    <TabLink
                      pathname={pathname}
                      label="What We Do"
                      value="what-we-do"
                    />
                  </li>
                  <li>
                    <TabLink
                      pathname={pathname}
                      label="Pricing"
                      value="pricing"
                    />
                  </li>
                  <li>
                    <a
                      href="https://calendly.com/himidlow"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.linkButton}
                    >
                      Let's talk
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div style={styles.mobileViewTab}>
              <NavBarMobile />
            </div>
          </div>
        </div>
      </MainWrapper>
    </PageContainer>
  )
}

export default NavBar
