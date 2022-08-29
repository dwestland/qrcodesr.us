import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import './scss/main.scss'

function App() {

  const headerVariants = {
    offscreen: {
      opacity: 0,
      scale: 1.1,
      // x: 100,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      // x: 0,
      transition: {
        bounce: .5,
        delay: .4,
        stiffness: 100,
        type: 'spring',
      }
    }
  }

  const asideVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.8,
      y: 100, 
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: .3,
        type: "Tween",
      }
    }
  }

  const sectionVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.9,
      x: 40
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: .2,
        bounce: 1.3,
        stiffness: 100,
        type: "spring",
      }
    }
  }

  const liVariants = {
    hover: {
      scale: 1.05,
      originX: .2,
      transition: {
        type: 'spring',
        stiffness: 300 
      }
    },
    tap: {
      scale: .95,
    }
  }

  return (
    <div className="container">

      {/* Header */}
      <motion.header
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div variants={headerVariants}>
          <img src="/images/qr-codes-r-us-logo.png" alt="QR Codes R Us" />
        </motion.div>
      </motion.header>

      {/* Preamble */}
      <div className='row preamble'>
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={asideVariants} >
            <img src="/images/t-shirt-with-model.jpg" alt="QR Code T-shirt" />
          </motion.div>
        </motion.aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={sectionVariants} >
            <h1>QR Code T-shirt</h1>
            <h2>Custom made for you or your business</h2>
            <ul>
              <motion.li
                variants={liVariants}
                whileHover={'hover'}
                whileTap={'tap'}
              >
                Order Now: <a href = "#">don@westland.net</a>
              </motion.li>
              <motion.li
                variants={liVariants}
                whileHover={'hover'}
                whileTap={'tap'}
              >
                Pricing: <a href = "#" target="_blank" rel="noreferrer">Click here</a>
              </motion.li>
              <motion.li
                variants={liVariants}
                whileHover={'hover'}
                whileTap={'tap'}
              >
                About us: <a href="#" target="blank">More info</a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.section>
      </div>

      <div className='row-spacer'>
        &nbsp; 
      </div>

      {/* CSS Menu */}
      <div className='row'>
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={asideVariants} >
            <img src="/images/css-menu-website.jpg" alt="CSS menu on Codepen" />
          </motion.div>
        </motion.aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={sectionVariants} >
          <h2>CSS Menu</h2>
          <h3>Responsive, SEO friendly menu with no JavaScript</h3>
          <p>This is a CSS only, dropdown horizontal nav bar that uses a simple HTML nested unordered list. It supports nested lists, three deep. It also has a responsive mobile style bottom nav with a hamburger menu button. Works without interfering with your JavaScript or framework.</p>
          <ul>
              <motion.li
                variants={liVariants}
                whileHover={'hover'}
                whileTap={'tap'}
              >
                Website: <a href='https://codepen.io/dwestland/pen/PowXbLM' target="_blank" rel="noreferrer">CSS Only Menu</a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.section>
      </div>

      <div className='row-spacer'>
        &nbsp; 
      </div>

      <footer>
      <p>&copy; QR Codes R.us {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App
