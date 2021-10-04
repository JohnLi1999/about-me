import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarComponents';
import {
  HOME_SECTION_ID,
  ABOUT_SECTION_ID,
  PROJECTS_SECTION_ID,
  NAVBAR_HEIGHT,
  SCROLL_DURATION,
} from '../../constants';
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to={HOME_SECTION_ID}
            onClick={toggle}
            smooth={true}
            duration={SCROLL_DURATION}
            spy={true}
            exact='true'
            offset={-NAVBAR_HEIGHT}>
            Home
          </SidebarLink>
          <SidebarLink
            to={ABOUT_SECTION_ID}
            onClick={toggle}
            smooth={true}
            duration={SCROLL_DURATION}
            spy={true}
            exact='true'
            offset={-NAVBAR_HEIGHT}>
            About
          </SidebarLink>
          <SidebarLink
            to={PROJECTS_SECTION_ID}
            onClick={toggle}
            smooth={true}
            duration={SCROLL_DURATION}
            spy={true}
            exact='true'
            offset={-NAVBAR_HEIGHT}>
            Projects
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
