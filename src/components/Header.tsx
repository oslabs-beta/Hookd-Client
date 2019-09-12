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
      <motion.h1 initial="hidden" animate="visible" transition={{ ease: 'easeOut', duration: 2 }} variants={variants}>HOOKD</motion.h1>
      <motion.p animate={{ x: 10 }} transition={{ ease: 'easeOut', duration: 1 }}> A Traspilation and Trasformation tool for React Class Components to Functional Components with Hooks. </motion.p>
      <motion.p animate={{ x: 10 }} transition={{ ease: 'easeOut', duration: 1 }}> Download our
        <a href="https://www.npmjs.com/package/@reactionaries/hookd"> CLI tool</a>, or find us through
        <a href="https://github.com/oslabs-beta/Hookd"> Github</a>.
      </motion.p>
      <motion.button 
        id ="submitButton" 
        onClick={props.handleClick}
        whileTap = {{scale: .9}}>Transform</motion.button>
    </div>
  );
}


export default Header;