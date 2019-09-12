import React from 'react';

interface NavbarProps {

}
const Navbar: React.FC<NavbarProps> = () => {

  return (
    <div id = 'navbar'>
      <ul className = 'flex'>
        <li>The Project</li>
      </ul>
    </div>
  );
}


export default Navbar;