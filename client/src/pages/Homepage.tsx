import React from 'react'
import BrandingSection from '../components/sections/BrandingSection'
import Header from '../components/sections/Header'
import WorkSection from '../components/sections/WorkSection'
import { background } from '../theme'
import DetailSection from '../components/sections/DetailSection'
import MembershipLevels from '../components/sections/MembershipLevels'
import ScrollToTop from '../components/ScrollToTop'
import Benefits from '../components/sections/Benefits'

interface HomepageProps {
  scrollToMembershipOnClick: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void
  whatWeDoId: string
  membershipId: string
  membershipPerksId: string
}

const Homepage: React.FC<HomepageProps> = ({
  scrollToMembershipOnClick,
  whatWeDoId,
  membershipId,
  membershipPerksId,
}) => {
  return (
    <div style={{ backgroundColor: background, width: '100%' }}>
      <ScrollToTop />
      <Header scrollToMembershipOnClick={scrollToMembershipOnClick} />
      <WorkSection />
      <BrandingSection />
      <DetailSection
        whatWeDoId={whatWeDoId}
        membershipPerksId={membershipPerksId}
      />
      <Benefits scrollToMembershipOnClick={scrollToMembershipOnClick} />
      <MembershipLevels membershipId={membershipId} />
    </div>
  )
}

export default Homepage
