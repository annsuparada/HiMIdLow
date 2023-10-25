import React from 'react'
import MainWrapper from '../components/MainWrapper'
import { background } from '../theme'

const WorkPage: React.FC = () => {
  return (
    <MainWrapper backgroundColor={background} minHeight="64vh">
      <h1>Works</h1>
    </MainWrapper>
  )
}

export default WorkPage
