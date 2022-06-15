import { Hamburger } from "@fremtind/jkl-hamburger-react";
import "@fremtind/jkl-hamburger/hamburger.min.css";
import { useState } from 'react';
import { Menu } from './Menu';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Hamburger
          aria-controls="mobile-menu-placeholder"
          id="mobile-menu"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div
        id="mobile-menu-placeholder"
        aria-labelledby="mobile-menu"
        role="group"
        hidden={!isOpen}
        style={{marginTop: 30}}
      >
        <Menu />
      </div>
    </>
  );
};
