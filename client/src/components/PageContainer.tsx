import React, { ReactNode } from 'react'

interface PageContainerProps {
  backgroundColor: string
  children: ReactNode
  padding?: string
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  backgroundColor,
  padding,
}) => {
  const styles = {
    container: {
      backgroundColor: backgroundColor,
      height: '100%',
      margin: 0,
      padding: padding ? padding : 0,
    },
  }
  return <div style={styles.container}>{children}</div>
}

export default PageContainer
