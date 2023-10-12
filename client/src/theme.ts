import { createTheme } from '@mui/material/styles'

export const primary = '#0034F0'
export const secondary = '#1A126F'
export const error = '#cc0000' // need to update
export const warning = '#f39c12' // need to update
export const success = '#007f4f' // need to update
export const background = '#efefef'
export const darkBackground = '#e3e4eb'
export const darkFont = '#21232a'

export const white = '#ffffff'

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
    fontFamily: ['Playfair Display', 'serif'].join(','),
    h1: {
      fontFamily: 'Playfair Display',
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Playfair Display',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Playfair Display',
      fontSize: '1.75rem',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Playfair Display',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Playfair Display',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: 'Playfair Display',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1.5rem',
    },
    body2: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    subtitle1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1.1rem',
    },
    subtitle2: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    caption: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    button: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    overline: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
  },
})
