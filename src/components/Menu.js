import { Hamburger } from '@fremtind/jkl-hamburger-react';
import '@fremtind/jkl-hamburger/hamburger.min.css';
import './Menu.css';
import { useState } from 'react';

export const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen((prevState) => !prevState);

  return (
    <>
      <Hamburger id='min-hamburger' onClick={toggleMenu} isOpen={menuIsOpen} aria-controls='min-meny'
                 className='menu' />

      <div id='min-meny' aria-labelledby='min-hamburger' role='group' hidden={!menuIsOpen}>
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>
      </div>
    </>
  );
};