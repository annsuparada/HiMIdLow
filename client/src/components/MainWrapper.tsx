import { useMediaQuery } from '@mui/material'
import React, { ReactNode } from 'react'
import { desktopView, mobileView } from '../theme'

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
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const styles = {
    container: {
      maxWidth: desktopView,
      margin: '0 auto',
      padding: isMobile ? '1rem' : '2rem',
      backgroundColor: backgroundColor,
      minHeight: minHeight ? minHeight : 'none',
    },
  }
  return <div style={styles.container}>{children}</div>
}

export default MainWrapper
