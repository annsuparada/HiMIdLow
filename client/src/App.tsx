import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { theme } from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
