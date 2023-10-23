import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import PageContainer from './components/PageContainer'
import Homepage from './pages/Homepage'
import { background, theme } from './theme'

const App: React.FC = () => {
  const membershipId = 'membership-levels'
  const whatWeDoId = 'what-we-do'

  const scrollToSectionOnClick = (targetId: string) => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageContainer backgroundColor={background}>
          <NavBar
            scrollToWhatWeDoOnClick={() => scrollToSectionOnClick(whatWeDoId)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  scrollToMembershipOnClick={() =>
                    scrollToSectionOnClick(membershipId)
                  }
                  membershipId={membershipId}
                  whatWeDoId={whatWeDoId}
                />
              }
            />
          </Routes>
        </PageContainer>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
