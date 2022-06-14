import React from 'react';
import {Box} from "@mui/material";
import {NavLink} from "react-router-dom";
import './footer.css'

type FooterProps = {}

type MenuProps = (props: {
  isActive: boolean;
}) => string

const Footer: React.FC<FooterProps> = () => {

  // 当前选中项返回classname
  const handleMenu: MenuProps = ({isActive}) =>
    isActive ? 'active' : 'menu-item'

  return (
    <Box pb={3} pt={6}>
      <footer className='footer'>
        <div className='menu'>
          <NavLink
            to="/admin/doing"
            className={handleMenu}
          >
            Doing
          </NavLink>
          <NavLink
            to="/admin/done"
            className={handleMenu}
          >
            Done
          </NavLink>
        </div>
      </footer>
    </Box>

  );
};

export default Footer;