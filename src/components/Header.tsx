import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  handleClick: () => void;
}
const Header: React.FC<HeaderProps> = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  return (
    <div id="header">
      <motion.h1 
      initial="hidden" 
      animate="visible" 
      transition={{ ease: 'easeOut', duration: 3 }} 
      variants={variants}
      >HOOKD</motion.h1>
      <motion.p  animate={{ x: 10 }} transition={{ ease: 'easeOut', duration: 1 }}> A Traspilation and Trasformation tool for React Class Components to Functional Components with Hooks. </motion.p>
      <motion.p animate={{ x: 10 }} transition={{ ease: 'easeOut', duration: 1 }}> Download our
        <a href="https://www.npmjs.com/package/@reactionaries/hookd"> CLI tool</a>
      </motion.p>
      <motion.div 
      className = 'github-button-div flex'>
        <motion.div>
        <p>Hookd-Client:</p>
        <a className="github-button" href="https://github.com/oslabs-beta/hookd-client" data-icon="octicon-star" data-show-count="true" aria-label="Star oslabs-beta/hookd-client on GitHub">Star</a>
        </motion.div>
        <motion.div>
        <p>Hookd-CLI:</p>
        <a className="github-button" href="https://github.com/oslabs-beta/hookd" data-icon="octicon-star" data-show-count="true" aria-label="Star oslabs-beta/hookd on GitHub">Star</a>
        </motion.div>
      </motion.div>
      
      <motion.button 
        id ="submitButton" 
        onClick={props.handleClick}
        whileTap = {{scale: .9}}>Transform</motion.button>
    </div>
  );
}


export default Header;