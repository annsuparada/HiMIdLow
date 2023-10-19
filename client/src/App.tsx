import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import PageContainer from './components/PageContainer'
import Homepage from './pages/Homepage'
import { background, theme } from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageContainer backgroundColor={background}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </PageContainer>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
