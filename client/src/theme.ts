import { createTheme } from '@mui/material/styles'

// export const primary = '#261AAB'
export const primary = '#0d60dd'
export const secondary = '#21232a'
export const error = '#cc0000' // need to update
export const warning = '#f39c12' // need to update
export const success = '#007f4f' // need to update
export const background = '#efefef'
export const darkBackground = '#e3e4eb'
export const darkFont = '#21232a'
// export const darkBotton = '#261aab'
export const darkBotton = '#0d60dd'
export const lightPurple = '#F0E5F6'
export const darkPurple = '#1A126F26'
export const white = '#ffffff'
export const offWhite = '#e8e8e8'
export const logoColor = '#21232A'
export const pink = '#FEE1FF'
export const orange = '#E88B5E'

export const mobileView = '600px'
export const tabletView = '850px'
export const desktopView = '1440px'

export const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: error,
    },
    warning: {
      main: warning,
    },
    success: {
      main: success,
    },
  },
  typography: {
    fontFamily: ['Plus Jakarta Sans', 'serif'].join(','),
    h1: {
      fontFamily: 'Inter',
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: '1.75rem',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Inter',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Inter',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1.5rem',
    },
    body2: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    subtitle1: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1.1rem',
    },
    subtitle2: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    caption: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    button: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    overline: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
  },
})
