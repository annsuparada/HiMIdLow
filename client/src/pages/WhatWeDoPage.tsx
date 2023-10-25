import { useMediaQuery } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import DetailSection from '../components/sections/DetailSection'
import { darkBackground, tabletView } from '../theme'

const WhatWeDoPage: React.FC = () => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '35px',
    },
    img: { maxWidth: isTablet ? '100%' : '500px', paddingTop: '17px' },
  }
  return (
    <>
      <NavBar pathname="what-we-do" />
      <div>
        <h1 style={{ textAlign: 'center', fontSize: '44px' }}>About Us</h1>
        <div style={styles.container}>
          <div>
            <p>
              <b>HiMidLow</b> is an LA based sonic branding and design agency.
              Built on the idea that sound should never play second fiddle in
              the creative process. We focus on building powerful relationships
              with our clients and helping them further explore creative ideas
              by making sound a central focus in their campaigns and their
              personal stories.
            </p>
            <p>
              We like to say our sound makes people ‘lean in’, and that’s true.
              Some stories require a whisper while others need a sledge hammer,
              in both cases the goal is the same, to captivate and connect with
              your audience. We know how to pull at your heartstrings or inspire
              change in the most stubborn listener. This is the power of sound
              and the magic we create with it.
            </p>

            <p>
              <i>
                “We make sound so good, they see you with their eyes closed.”{' '}
                <br />
                ~Andy
              </i>
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dejr86qx8/image/upload/v1698203954/caught-in-joy-ptVBlniJi50-unsplash_bwd8fr.jpg"
              alt="Hi Mid Low Studio"
              style={styles.img}
            />
          </div>
        </div>

        <div style={{ backgroundColor: darkBackground }}>
          <div style={styles.container}>
            <div style={{ maxWidth: '250px', margin: '0 auto' }}>
              <img
                src="https://res.cloudinary.com/dejr86qx8/image/upload/v1698210257/IMG_8110_c6uvgc.jpg"
                alt="Andrew Kantos"
                style={{
                  maxWidth: '250px',
                  maxHeight: '250px',
                  borderRadius: '50%',
                }}
              />
            </div>
            <div style={{ marginTop: '25px' }}>
              <p>
                <b>HiMidLow</b> was founded by Andy Kantos in 2021. Andy began
                his career in Television nearly 20 years ago and has had a
                celebrated career working on shows like{' '}
                <b>
                  Breaking Bad, Shameless, The Equalizer, The Chi, Cruel Summer
                  and more
                </b>
                . Working with creative people is his deepest joy and if you
                work with HiMidLow, there’s a really good chance you’ll be
                working directly with Andy.
              </p>
            </div>
          </div>
        </div>
        <DetailSection whatWeDoId="" />
      </div>
    </>
  )
}

export default WhatWeDoPage
