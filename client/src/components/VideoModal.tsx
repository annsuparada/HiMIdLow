import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Card, CardActionArea, CardMedia, useMediaQuery } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import { darkFont, mobileView, orange, tabletView, white } from '../theme'

interface VideoModelProps {
  imgUrl: string
  alt: string
  videoUrl: string
  displayIcon: boolean
}

const VideoModal: React.FC<VideoModelProps> = ({
  imgUrl,
  videoUrl,
  alt,
  displayIcon,
}) => {
  const [open, setOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  const styles = {
    modal: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '800px',
      boxShadow: 26,
    },
    icon: {
      fontSize: '5rem',
      color: white,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: isHovering ? 1 : 0,
      zIndex: isHovering ? 1 : 2,
      transition: 'opacity 0.3s ease, z-index 0.3s ease',
    },
    cardMediaHover: {
      WebkitFilter: isHovering ? 'grayscale(70%)' : 'none',
      filter: isHovering ? 'grayscale(90%)' : 'none',
      WebkitTransition: 'opacity 0.3s ease, z-index 0.3s ease',
      transition: 'opacity 0.3s ease, z-index 0.3s ease',
    },
    playIcon: {
      fontSize: '3rem',
      color: isHovering ? orange : white,
      padding: '5px',
      cursor: 'pointer',
    },
    zoomInImg: {
      transition: '0.3s',
      transform: isHovering ? 'scale(1.1)' : 'none',
    },
    displayIcon: {
      overflow: 'hidden',
      display: 'inline-block',
      boxSizing: 'border-box' as 'border-box',
      width: '100%',
    },
    gradientOverlay: {
      content: '""',
      position: 'absolute' as 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '5%',
      background:
        'linear-gradient(to bottom, rgba(33, 35, 42, 0), rgba(33, 35, 42, 1))',
      pointerEvents: 'none' as 'none',
    },
  }

  const videoWidth = isMobile ? '350px' : isTablet ? '600px' : '800px'
  const videoHeight = isMobile ? '200px' : isTablet ? '340px' : '450px'

  return (
    <div>
      <div
        style={displayIcon ? styles.displayIcon : styles.cardMediaHover}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card
          sx={{ width: '100%', backgroundColor: darkFont }}
          onClick={handleOpen}
        >
          <CardActionArea sx={styles.displayIcon}>
            <CardMedia
              component="img"
              width="100%"
              image={imgUrl}
              alt={alt}
              sx={styles.zoomInImg}
            />
            {displayIcon && <div style={styles.gradientOverlay}></div>}
          </CardActionArea>
          {displayIcon ? (
            <div style={{ display: 'flex' }}>
              <PlayCircleOutlinedIcon sx={styles.playIcon} />
              <h3 style={{ color: white }}>{alt}</h3>
            </div>
          ) : (
            <YouTubeIcon sx={styles.icon} />
          )}
        </Card>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <iframe
            src={videoUrl}
            title="Embedded YouTube Video"
            allowFullScreen
            width={videoWidth}
            height={videoHeight}
            frameBorder="0"
          ></iframe>
        </Box>
      </Modal>
    </div>
  )
}

export default VideoModal
