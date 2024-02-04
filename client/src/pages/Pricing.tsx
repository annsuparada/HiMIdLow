import React from 'react'
import HadingTitle from '../components/HeadingTitle'
import MainWrapper from '../components/MainWrapper'
import NavBar from '../components/NavBar'
import PageContainer from '../components/PageContainer'
import Benefits from '../components/sections/Benefits'
import MembershipLevels from '../components/sections/MembershipLevels'
import { darkBackground } from '../theme'

const PricingPage: React.FC = () => {
  return (
    <>
      <NavBar pathname="pricing" />
      <HadingTitle
        title="Pricing"
        text="Find the perfect melody for your success"
      />
      <PageContainer backgroundColor={darkBackground}>
        <MainWrapper backgroundColor={darkBackground}>
          <MembershipLevels membershipId="" />
          <Benefits disabledButton={true} />
        </MainWrapper>
      </PageContainer>
    </>
  )
}

export default PricingPage
