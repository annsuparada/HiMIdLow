import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import PageContainer from './components/PageContainer'
import Homepage from './pages/Homepage'
import PricingPage from './pages/Pricing'
import TosPage from './pages/TosPage'
import WhatWeDoPage from './pages/WhatWeDoPage'
import WorkPage from './pages/WorkPage'
import { background, theme } from './theme'

const App: React.FC = () => {
  const membershipId = 'membership-levels'
  const whatWeDoId = 'what-we-do'
  const membershipPerksId = 'memershipPerksId'

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
            <Route path="/terms-and-conditions" element={<TosPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/work" element={<WorkPage />} />
          </Routes>
        </PageContainer>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
