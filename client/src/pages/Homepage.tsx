import React from 'react'
import BrandingSection from '../components/sections/BrandingSection'
import Header from '../components/sections/Header'
import MainWrapper from '../components/MainWrapper'
import WorkSection from '../components/sections/WorkSection'
import { background } from '../theme'
import DetailSection from '../components/sections/DetailSection'

const Homepage: React.FC = () => {
  return (
    <MainWrapper backgroundColor={background}>
      <Header />
      <WorkSection />
      <BrandingSection />
      <DetailSection />
    </MainWrapper>
  )
}

export default Homepage
