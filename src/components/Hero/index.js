import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaPlay } from 'react-icons/fa'
import { RiArrowUpSFill } from 'react-icons/ri'
import { MdEdit } from 'react-icons/md'
import { FiHelpCircle, FiUser, FiSearch, FiChevronDown } from 'react-icons/fi'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import Netflix_logo from "../../assets/images/netflix-logo.png"
import Avatar from "../../assets/images/avatar.png"
import Avatar_1 from "../../assets/images/avatar_1.png"
import Avatar_2 from "../../assets/images/avatar_2.png"
import Avatar_3 from "../../assets/images/kids_avatar.png"
import { useDispatch, useSelector } from 'react-redux'
import { closeNavbarHandler, toggleMenuBar, toggleProfileHandler } from '../../store/slug-actions'

function Hero() {
    const [pageYOffset, setPageYOffset] = useState(0)
    const [openSearch, setOpenSearch] = useState(false)
    const profileRef = useRef(null);
    const navRef = useRef(null)

    const dispatch = useDispatch()
    const slug = useSelector((state) => state.slug)
    
    // handle clickOutside event for navbar
    const hanldeClickOutside = (event) => {
        if(!navRef.current.contains(event.target)){
            hideNavbar()
        }
    }
    // handle search input
    const handleSearch = () => setOpenSearch(!openSearch)
    
    const toggleNavbar = () => dispatch(toggleMenuBar())
    const toggleProfile = () => dispatch(toggleProfileHandler())
    const hideNavbar = () => dispatch(closeNavbarHandler())
    
    const handlePageScroll = () => {
        let offsetY = window.pageYOffset
        setPageYOffset(offsetY);
    }


    useEffect(() => {
        document.addEventListener('mousedown', (event) => hanldeClickOutside(event))
        document.addEventListener('scroll', handlePageScroll)
        return () => document.removeEventListener('mousedown', (event) => hanldeClickOutside(event))
    }, [pageYOffset]);

  return (
    <div className='hero'>
            <nav className={pageYOffset > 20 ? 'fixedNavbar' : '' }>
                <div className='left'>
                    <div className='logo'>
                        <img src={Netflix_logo} alt="Netflix Logo" />
                    </div>
                    <div className='links' ref={navRef}>
                        <span className='browse'  onClick={toggleNavbar}>Browse 
                            <span className='has-children'> <IoMdArrowDropdown/> </span> 
                        </span>
                        <ul className={slug.showNav ? 'displayBlock' : ''}>
                            <li> <a href='#'> Home </a> </li>
                            <li> <a href='#'> TV Shows </a> </li>
                            <li> <a href='#'> Movies </a> </li>
                            <li> <a href='#'> New &#38; Popular </a> </li>
                            <li> <a href='#'> My List </a> </li>
                        </ul>
                    </div>    
                </div>
                <div className='right'>
                    <div className='search-avatar'>
                        <span className='search-icon' onClick={handleSearch}> <FiSearch/> </span>
                        <div className='avatar-wrapper' onClick={toggleProfile}>
                            <img className='avatar' src={Avatar} alt="avatar" />
                            <span className='has-children'> <IoMdArrowDropdown/> </span>    
                        </div>
                        <div className={`accounts sub-accounts ${slug.showProfile ? 'displayBlock' : ''}`} ref={profileRef}>
                            <span className='chevron-up'><RiArrowUpSFill/></span>   
                            <div className='accounts-container'>
                                <div className='single-account'>
                                    <img className='avatar' src={Avatar}/> 
                                    <span className='name'> Friday </span>   
                                </div> 
                                 <div className='single-account'>
                                    <img className='avatar' src={Avatar_1}/> 
                                    <span className='name'> Victor </span>   
                                </div> 
                                 <div className='single-account'>
                                    <img className='avatar' src={Avatar_2}/> 
                                    <span className='name'> Ifeanyi </span>   
                                </div>
                                 <div className='single-account'>
                                    <img className='avatar' src={Avatar_3}/> 
                                    <span className='name'> Kids </span>   
                                </div>  
                                <p className='sub-section'> 
                                    <span className='edit-icon'><MdEdit/></span> 
                                    Manage Profiles
                                </p>  
                                <ul className='settings'>
                                    <li> <span className='user-icon'> <FiUser/> </span> Account </li>
                                    <li> <span className='help-icon'> <FiHelpCircle/> </span> Help Center </li>
                                </ul>
                                <a href='#' className='sign-out'>Sign out of Netflix</a>
                            </div>
                        </div>                           
                    </div>  
                    <div className={`search ${openSearch ? 'displayBlock' : '' }`}>
                        <span className='search-icon'> <FiSearch/> </span>
                        <input type='text' placeholder='Titles, people, genres'/>
                    </div>
                </div>
            </nav>
            <div className='info'>
                <h1 className='title'>Sex Education</h1>
                <p className='description'>
                    To end an apocalyptic war and save her daughter, a reluctant soldier embarks on a desperate mission to cross a frozen sea carrying a top-secret cargo.    
                </p>
                <div className='more-info'>
                    <a href='#' className='btn'> 
                    <span className='play-icon'> <FaPlay/> </span>  
                    <span className='text'>Play</span> </a>
                    <a href='#' className='btn'> <span className='more-icon'> <AiOutlineInfoCircle/> </span>  <span className='text'> More info </span> </a>
                </div>
            </div>
        </div>
  )
}

export default Hero