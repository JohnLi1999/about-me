import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarComponents';
import {
  HOME_SECTION_ID,
  ABOUT_SECTION_ID,
  PROJECTS_SECTION_ID,
  NAVBAR_HEIGHT,
  SCROLL_DURATION,
} from '../../constants';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= NAVBAR_HEIGHT) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={+scrollNav}>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to={HOME_SECTION_ID}
                smooth={true}
                duration={SCROLL_DURATION}
                spy={true}
                exact='true'
                offset={-NAVBAR_HEIGHT}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to={ABOUT_SECTION_ID}
                smooth={true}
                duration={SCROLL_DURATION}
                spy={true}
                exact='true'
                offset={-NAVBAR_HEIGHT}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to={PROJECTS_SECTION_ID}
                smooth={true}
                duration={SCROLL_DURATION}
                spy={true}
                exact='true'
                offset={-NAVBAR_HEIGHT}>
                Projects
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
