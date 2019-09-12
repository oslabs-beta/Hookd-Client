import React from 'react';
import {motion} from 'framer-motion';
export interface FooterProps {
  
}
 
const Footer : React.FC<FooterProps> = (props) => {
  return (
    <div id="footer">
      <h1>The REACTionaries</h1>
      <article>
        Hookd is a transpilation and transformation tool to help ease developers into working with hooks in their already existing projects.  As a group of developers that are infatuated with the ease and simplicity of hooks, we would love to make learning and using hooks more accessible to the wider React community.
      </article>
      <div className="team flex">
        <motion.div whileHover = {{scale: 1.1}} className="team-member">
          <img className = 'team-member-img' src="./images/devon.jpg" alt="devon vaccarino"/>
          <h1>Devon Vaccarino</h1>
          <p>Devon is a fullstack engineer in Los Angeles, CA who loves working on React UIs and is hooked on hooks. As a developer he would like to work on projects that constantly challenge the breadth and depth of programming. When he's not coding he can often be found salsa and bachata dancing or  escape rooms.</p>
        </motion.div>
        <motion.div whileHover = {{scale: 1.1}} className="team-member">
          <img className = 'team-member-img' src="./images/danny.JPG" alt="danny byrne"/>
          <h1>Danny Byrne</h1>
          <p>Danny Byrne is a Software Engineer based in Los Angeles, CA. He is passionate about the impact that technology has on our daily lives.  In his spare time, he enjoys exploring the Wild Areas of the American West, creating ambient electronic music, and pondering the mysteries of the cosmos.</p>
        </motion.div>
        <motion.div whileHover = {{scale: 1.1}} className="team-member">
          <img className = 'team-member-img' src="./images/alex.jpg" alt="alex diep"/>
          <h1>Alex Diep</h1>
          <p>Alexander Diep is a Software Engineer hailing from Monterey Park, CA. Ultimately, he cares for learning new ways to solve problems and is compassionate about his community; combining the two with technology.  He is usually immersed in competitive games, VR, and biking around in urban areas.</p>
        </motion.div>
      </div>
      <div className="links">
        <a href="https://github.com/oslabs-beta/Hookd-client" className="github">Github Client</a>
        <a href="https://github.com/oslabs-beta/Hookd" className="github-cli">Github CLI</a>
        <a href="https://www.npmjs.com/package/@reactionaries/hookd" className="npm">npm package</a>
      </div>
    </div>
  );
}
 
export default Footer ;