import React, { ReactNode } from 'react'

interface PageContainerProps {
  backgroundColor: string
  children: ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  backgroundColor,
}) => {
  const styles = {
    container: {
      backgroundColor: backgroundColor,
      height: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
    },
  }
  return <div style={styles.container}>{children}</div>
}

export default PageContainer
