import React from 'react';
import {IconButton} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";
import styles from './Nav.module.css'

type NavProps = {}

const Nav: React.FC<NavProps> = () => {
  return (
    <nav className={styles.nav}>
      <Link to='/admin/setting'>
        <IconButton><SettingsIcon sx={{color: "#FFF"}} /></IconButton>
      </Link>
    </nav>
  );
};

export default Nav;