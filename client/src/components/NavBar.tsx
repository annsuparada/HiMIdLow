import { Button, Tab, Tabs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { background, darkBotton, darkFont, white } from '../theme'
import MainWrapper from './MainWrapper'
import logo from '../logo/LargeLogoBlack.svg'

const NavBar: React.FC = () => {
  const [value, setValue] = React.useState('work')

  const styles = {
    navContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      justifycontent: 'space-between',
      paddingTop: '18px',
    },
    linkContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      justifycontent: 'end',
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
    },
    logo: {
      width: '150px',
      paddingTop: '20px',
    },
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <MainWrapper backgroundColor={background}>
      <div style={styles.navContainer}>
        <Link to="/">
          <img src={logo} alt="Low Mid Hight Logo" style={styles.logo} />
        </Link>
        <div></div>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
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
            label={
              <Link to="#what-we-do" style={styles.link}>
                What we do
              </Link>
            }
            sx={styles.tab}
          />
          <Tab
            value="benefits"
            label={
              <Link to="#work" style={styles.link}>
                Benefits
              </Link>
            }
            sx={styles.tab}
          />
          <Tab
            value="contact"
            label={
              <Button variant="contained" style={styles.botton}>
                <Link to="#contact" style={styles.linkBotton}>
                  Let's talk
                </Link>
              </Button>
            }
            sx={styles.tab}
          />
        </Tabs>
      </div>
    </MainWrapper>
  )
}

export default NavBar
