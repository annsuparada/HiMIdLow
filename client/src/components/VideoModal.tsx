import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Card, CardActionArea, CardMedia } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { white } from '../theme'

interface VideoModelProps {
  imgUrl: string
  alt: string
  // imgHeight: string
  videoUrl: string
}

const VideoModal: React.FC<VideoModelProps> = ({
  imgUrl,
  // imgHeight,
  videoUrl,
}) => {
  const [open, setOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
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
    cardMedia: {
      WebkitFilter: isHovering ? 'grayscale(70%)' : 'none',
      filter: isHovering ? 'grayscale(90%)' : 'none',
      WebkitTransition: 'opacity 0.3s ease, z-index 0.3s ease',
      transition: 'opacity 0.3s ease, z-index 0.3s ease',
    },
  }

  return (
    <div>
      <div
        style={styles.cardMedia}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card sx={{ width: '100%' }} onClick={handleOpen}>
          <CardActionArea>
            <CardMedia
              component="img"
              width="100%"
              image={imgUrl}
              alt="green iguana"
              sx={styles.cardMedia}
            />
            <YouTubeIcon sx={styles.icon} />
          </CardActionArea>
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
            width="850"
            height="485"
            frameBorder="0"
          ></iframe>
        </Box>
      </Modal>
    </div>
  )
}

export default VideoModal
