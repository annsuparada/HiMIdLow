import React from 'react'
import BrandingSection from '../components/sections/BrandingSection'
import Header from '../components/sections/Header'
import WorkSection from '../components/sections/WorkSection'
import { background } from '../theme'
import DetailSection from '../components/sections/DetailSection'
import MembershipLevels from '../components/sections/MembershipLevels'

const Homepage: React.FC = () => {
  const targetId = 'membership-levels'
  const scrollToSectionOnClick = () => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div style={{ backgroundColor: background, width: '100%' }}>
      <Header scrollToSectionOnClick={scrollToSectionOnClick} />
      <WorkSection />
      <BrandingSection />
      <DetailSection scrollToSectionOnClick={scrollToSectionOnClick} />
      <MembershipLevels />
    </div>
  )
}

export default Homepage
