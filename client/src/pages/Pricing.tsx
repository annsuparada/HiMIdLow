import React from 'react'
import HadingTitle from '../components/HeadingTitle'
import MainWrapper from '../components/MainWrapper'
import PageContainer from '../components/PageContainer'
import MembershipLevels from '../components/sections/MembershipLevels'
import { darkBackground } from '../theme'

const PricingPage: React.FC = () => {
  return (
    <PageContainer backgroundColor={darkBackground}>
      <MainWrapper backgroundColor={darkBackground}>
        <HadingTitle title="Pricing" />
        <MembershipLevels membershipId="" />
      </MainWrapper>
    </PageContainer>
  )
}

export default PricingPage
