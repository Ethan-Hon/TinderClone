import React from 'react';
import './Header.css';
import Personicon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import TinderLogo from '../../img/tinderlogo.jpg';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
	return (
		<div className="header">

      <IconButton>
        <Personicon fontSize='large' className='header_icon'/>
      </IconButton>

      <img className='header_logo' src={TinderLogo} alt="Logo"/>
      
      <IconButton>
        <ForumIcon fontSize='large' className='header_forum'/>
      </IconButton>
      
		</div>
	)
}

export default Header
