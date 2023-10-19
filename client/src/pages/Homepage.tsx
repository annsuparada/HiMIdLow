import React from 'react'
import BrandingSection from '../components/sections/BrandingSection'
import Header from '../components/sections/Header'
import WorkSection from '../components/sections/WorkSection'
import { background } from '../theme'
import DetailSection from '../components/sections/DetailSection'
import MembershipLevels from '../components/sections/MembershipLevels'

const Homepage: React.FC = () => {
  return (
    <div style={{ backgroundColor: background, width: '100%' }}>
      <Header />
      <WorkSection />
      <BrandingSection />
      <DetailSection />
      <MembershipLevels />
    </div>
  )
}

export default Homepage
