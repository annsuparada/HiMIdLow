import { Button, Menu, MenuItem } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { darkFont } from '../theme'

const NavBarMobile: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const styles = {
    link: {
      color: darkFont,
      textDecoration: 'none',
    },
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" color="secondary" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <Link to="/work" style={styles.link}>
            Work
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/what-we-do" style={styles.link}>
            What We Do
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/pricing" style={styles.link}>
            Pricing
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="https://calendly.com/himidlow"
            target="_blank"
            style={styles.link}
          >
            Let's Talk
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default NavBarMobile
