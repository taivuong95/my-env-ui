import React from 'react';
const Navigation = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-bar__button--burger'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='nav-bar__location'>
        <div className='nav-bar__location--app-name'>myENV</div>
        <div className='nav-bar__location--dropdown'>
          <span>Current Location</span>
          <span className='nav-bar__location--dropdown--icon'></span>
        </div>
      </div>
      <div className='nav-bar__notification'></div>
    </div>
  )
}

export default Navigation;