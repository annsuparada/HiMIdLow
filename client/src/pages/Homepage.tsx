import React from 'react'
import Header from '../components/Header'
import MainWrapper from '../components/MainWrapper'
import { background } from '../theme'

const Homepage: React.FC = () => {
  return (
    <MainWrapper backgroundColor={background}>
      <Header />
    </MainWrapper>
  )
}

export default Homepage
