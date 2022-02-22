import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';
import { FaBars } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { tooglecollapse } from './slice/navbarslice'

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const dispatch = useDispatch()
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

 const clickmenubar = () => {
  setCollapsed(!collapsed);
}

  return (
    <div className='containerspecial'>
      <div className='header'>
        <div className='menuicon'>          
          <FaBars className='menuiconitem' onClick={()=>dispatch(tooglecollapse())} />
        </div>
      </div>
      <div className='sidecontentmenu'>
        <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
          <Aside
            image={image}
            collapsed={collapsed}
            rtl={rtl}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
          />
          <Main
            image={image}
            toggled={toggled}
            collapsed={collapsed}
            rtl={rtl}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
            handleRtlChange={handleRtlChange}
            handleImageChange={handleImageChange}
          />
        </div>
      </div>
    </div>
    
  );
}

export default Layout;
