import React from 'react'
import BrandingSection from '../components/sections/BrandingSection'
import Header from '../components/sections/Header'
import WorkSection from '../components/sections/WorkSection'
import { background } from '../theme'
import DetailSection from '../components/sections/DetailSection'
import MembershipLevels from '../components/sections/MembershipLevels'

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
      <Header scrollToMembershipOnClick={scrollToMembershipOnClick} />
      <WorkSection />
      <BrandingSection />
      <DetailSection
        whatWeDoId={whatWeDoId}
        membershipPerksId={membershipPerksId}
        scrollToMembershipOnClick={scrollToMembershipOnClick}
      />
      <MembershipLevels membershipId={membershipId} />
    </div>
  )
}

export default Homepage
