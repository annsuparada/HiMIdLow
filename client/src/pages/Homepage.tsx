import React from 'react'
import Header from '../components/Header'
import MainWrapper from '../components/MainWrapper'
import WorkSection from '../components/WorkSection'
import { background } from '../theme'

const Homepage: React.FC = () => {
  return (
    <MainWrapper backgroundColor={background}>
      <Header />
      <WorkSection />
    </MainWrapper>
  )
}

export default Homepage
