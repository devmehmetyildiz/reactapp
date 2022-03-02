import { Case } from './Case';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aside from './Aside';
import Main from './Main';
import Login from './Pages/Login/Login'
import { FaBars, FaStar } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { tooglecollapse } from './slice/navbarslice'
import React, { useState } from 'react';


import './styles/App.scss';
import { logout, selectUser } from './slice/userSlice';
import Logout from './Pages/Login/Logout';
function App() {
  var imagestatus = Boolean(localStorage.getItem('image'));

  const [locale, setLocale] = useState('en');
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(imagestatus);
  const [toggled, setToggled] = useState(false);
  const dispatch = useDispatch()
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const user = useSelector(selectUser)
  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
    localStorage.setItem('image', checked)
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className='containerspecial'>
      {user ? <BrowserRouter>
        <div className='header'>
          <div className='menuicon'>
            <FaBars className='menuiconitem' onClick={() => dispatch(tooglecollapse())} />
          </div>
          <div className='appicon'>
            <FaStar />
          </div>
          <Logout></Logout>
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
            <Routes>
              <Route path='/' element={<Main
                image={image}
                toggled={toggled}
                collapsed={collapsed}
                rtl={rtl}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                handleRtlChange={handleRtlChange}
                handleImageChange={handleImageChange}
              />} exact />
              <Route path='/Case' element={<Case />} />
              <Route exact path='/' component={Login} />
            </Routes>
          </div>
        </div>
      </BrowserRouter> : <Login />}

    </div>
  );
}
export default App;




