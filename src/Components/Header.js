import React from 'react'
import logo from '../Images/logo (2).svg'
import { FaMagnifyingGlass, FaBook } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div>
        <header className='header'>
            <div className='left-header'>
            <img id='logo' src={logo} width={'50px'}/>
            <h2>KeazoN<span id='book-text'>BOOKS</span></h2>
            </div>
            <div className='center-header'>
                <div className='input-div'>
                <FaMagnifyingGlass/>
                <input type='text' style={{
                    color:'white'
                }} id='input' placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...' />
                </div>
                <button id='search-btn'>Search</button>
            </div>
            <div className='right-header'>
                <FaBook id='icons'/>
                <IoMdNotificationsOutline id='icons'/>
                <IoDiamondOutline id='icons'/>
                <CgProfile id='icons'/>
            </div>
        </header>
    </div>
  )
}

export default Header