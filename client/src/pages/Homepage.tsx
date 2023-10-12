import React from 'react'
import MainWrapper from '../components/MainWrapper'
import PageContainer from '../components/PageContainer'
import { background } from '../theme'

const Homepage: React.FC = () => {
  const styles = {
    container: {
      //   backgroundColor: background,
    },
  }
  return (
    <PageContainer backgroundColor={background}>
      <MainWrapper backgroundColor={background}>
        <div style={styles.container}>Homepage</div>
      </MainWrapper>
    </PageContainer>
  )
}

export default Homepage
