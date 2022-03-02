import React from 'react'
import { logout } from '../../slice/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { FaFontAwesome } from 'react-icons/fa'
import "../..//styles/Logout.css"
import { Link } from 'react-router-dom'
const Logout = () => {
  
  const reduxuser = useSelector((state) => state.user.user)
  console.log('reduxuser: ', reduxuser);
  
  const dispatch = useDispatch();
  const handlelogout = (e) => {
    e.preventDefault()   
    dispatch(logout())
  }
  return (
    <div className='logout'>
      <h5 >{reduxuser.name}</h5>
      <Link to='/' onClick={(e) => handlelogout(e)}>
      <FaFontAwesome  icon="fa-solid fa-arrow-right-from-bracket" />      
      </Link>
    </div>
  )
}

export default Logout