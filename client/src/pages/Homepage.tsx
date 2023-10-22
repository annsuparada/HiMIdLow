import React from 'react'
import BrandingSection from '../components/sections/BrandingSection'
import Header from '../components/sections/Header'
import WorkSection from '../components/sections/WorkSection'
import { background } from '../theme'
import DetailSection from '../components/sections/DetailSection'
import MembershipLevels from '../components/sections/MembershipLevels'

const Homepage: React.FC = () => {
  const membershipId = 'membership-levels'
  const scrollToSectionOnClick = (targetId: string) => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div style={{ backgroundColor: background, width: '100%' }}>
      <Header
        scrollToSectionOnClick={() => scrollToSectionOnClick(membershipId)}
      />
      <WorkSection />
      <BrandingSection />
      <DetailSection
        scrollToSectionOnClick={() => scrollToSectionOnClick(membershipId)}
      />
      <MembershipLevels targetId={membershipId} />
    </div>
  )
}

export default Homepage
