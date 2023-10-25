import { Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { membershipPerks } from '../../data'
import { mobileView, tabletView } from '../../theme'
import ScrollToTop from '../ScrollToTop'

interface BenefitsProps {
  scrollToMembershipOnClick?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void
  disabledButton?: boolean
}

const Benefits: React.FC<BenefitsProps> = ({
  scrollToMembershipOnClick,
  disabledButton,
}) => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const styles = {
    h1: { textAlign: 'center' as 'center', fontSize: '44px' },
    cardContainer: {
      maxWidth: '1300px',
      margin: '4rem auto 0',
      display: 'grid',
      gap: '2.5rem',
      gridTemplateColumns: isMobile
        ? '1fr'
        : isTablet
        ? '1fr 1fr'
        : 'repeat(3, 1fr)',
    },
  }
  return (
    <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <ScrollToTop />
      <div>
        <h1 style={styles.h1}>Membership perks!</h1>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center' }}>
            Working with us is so seamless and easy, you’ll never need to go
            anywhere else.
          </p>
          {!disabledButton && (
            <Button
              onClick={scrollToMembershipOnClick}
              variant="contained"
              size="large"
              sx={{ display: 'block', margin: '45px auto' }}
            >
              See our Plans
            </Button>
          )}
        </div>
      </div>

      <div style={styles.cardContainer}>
        {membershipPerks.map((el, index) => (
          <div style={{ padding: '0 10px' }} key={index}>
            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{el.title}</p>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

Benefits.defaultProps = {
  disabledButton: false,
}

export default Benefits
