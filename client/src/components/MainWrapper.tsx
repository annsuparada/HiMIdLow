import React, { ReactNode } from 'react'
import { desktopView } from '../theme'

interface MainWrapperProps {
  children: ReactNode
  backgroundColor: string
  minHeight?: string
}

const MainWrapper: React.FC<MainWrapperProps> = ({
  children,
  backgroundColor,
  minHeight,
}) => {
  const styles = {
    container: {
      maxWidth: desktopView,
      margin: '0 auto',
      padding: 0,
      backgroundColor: backgroundColor,
      minHeight: minHeight ? minHeight : 'none',
    },
  }
  return <div style={styles.container}>{children}</div>
}

export default MainWrapper
