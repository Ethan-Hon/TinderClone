import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton'


function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize='large' className="swipeButton_repeat"/>
      </IconButton>
      <IconButton>
        <CloseIcon fontSize='large' className="swipeButton_left"/>
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize='large' className="swipeButton_star"/>
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize='large' className="swipeButton_right"/>
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize='large' className="swipeButton_lightening"/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons

