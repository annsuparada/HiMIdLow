import React from 'react'
import HadingTitle from '../components/HeadingTitle'
import MainWrapper from '../components/MainWrapper'
import PageContainer from '../components/PageContainer'
import Benefits from '../components/sections/Benefits'
import MembershipLevels from '../components/sections/MembershipLevels'
import { darkBackground } from '../theme'

const PricingPage: React.FC = () => {
  return (
    <PageContainer backgroundColor={darkBackground}>
      <MainWrapper backgroundColor={darkBackground} padding="0 0 6rem 0">
        <HadingTitle title="Pricing" />
        <MembershipLevels membershipId="" />
        <Benefits disabledButton={true} />
      </MainWrapper>
    </PageContainer>
  )
}

export default PricingPage
