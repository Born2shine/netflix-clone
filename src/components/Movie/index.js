import React from 'react'

import { FiChevronDown } from 'react-icons/fi'
import { FaPlay } from 'react-icons/fa'
import {AiOutlinePlus, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'

import { SwiperSlide } from "swiper/react"


import Movie_img from "../../assets/images/movie-img.jpg"

function index() {
  return (
    <>
       {/* single movie */}
        <SwiperSlide className='single-movie'>
            <img className='movie-img' src={Movie_img} alt="movie image" />
                                <div className='infos'>
                                    <div className='controls'>
                                        <div className='left'>
                                            <span className='control-icon'> <FaPlay/> </span>
                                            <span className='control-icon'> <AiOutlinePlus/> </span>
                                            <span className='control-icon'> <AiOutlineLike/> </span>
                                            <span className='control-icon'> <AiOutlineDislike/> </span>
                                        </div>  
                                        <div className='right'>
                                            <span className='control-icon'> <FiChevronDown/> </span>    
                                        </div>  
                                    </div>  
                                    <div className='name-genre'>
                                        <h4 className='name'>Green Arrow: Season 1</h4>
                                        <ul>
                                            <li>Action</li>
                                            <li>Adventure</li>
                                            <li>Science Fiction</li>
                                        </ul>
                                    </div>  
                                </div>
        </SwiperSlide>
        {/* end of single movie */}
    </>
  )
}

export default index