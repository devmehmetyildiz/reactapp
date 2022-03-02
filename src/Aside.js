import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from './assets/bg2.jpg';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {

  const reduxcollapse = useSelector((state) => state.navbarredux.collapse)
  return (

    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={reduxcollapse}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>

      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>

            <NavLink to="/">
              Home
            </NavLink>

          </MenuItem>
          <MenuItem icon={<FaGem />}>
          <NavLink to="/Case">
              Case
            </NavLink>
          </MenuItem>
          <SubMenu
            title='withSuffix'
            icon={<FaRegLaughWink />}
          >
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
          <SubMenu
            title='withPrefix'
            icon={<FaHeart />}
          >
            <MenuItem> 1</MenuItem>
            <MenuItem> 2</MenuItem>
            <MenuItem> 3</MenuItem>
          </SubMenu>
          <SubMenu title='multiLevel' icon={<FaList />}>
            <MenuItem> 1 </MenuItem>
            <MenuItem> 2 </MenuItem>
            <SubMenu title='3'>
              <MenuItem> 3.1 </MenuItem>
              <MenuItem> 3.2 </MenuItem>
              <SubMenu title='3.3'>
                <MenuItem> 3.3.1 </MenuItem>
                <MenuItem> 3.3.2 </MenuItem>
                <MenuItem> 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>

            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>

  );
};

export default Aside;
