import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

import { AiOutlineClose, AiOutlinePlus, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination, Navigation, Mousewheel } from "swiper";

import Movie_img from "../../assets/images/movie-img.jpg"
import Movie_img_1 from "../../assets/images/movie-img-1.jpg"

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from 'react-redux'
import { setWindowSize, toggleMovieModal } from '../../store/slug-actions'

const Category = () => {
    const dispatch = useDispatch()

    const slug = useSelector((state) => state.slug)
    const windowResizeHandler = () => dispatch(setWindowSize())

    const handleMovieClick = () => dispatch(toggleMovieModal())

    useEffect(() => {
        window.addEventListener('resize', windowResizeHandler)
        windowResizeHandler()
        return () => window.removeEventListener('resize', windowResizeHandler)
    }, [slug.winSize]);
  return (
    <>
        {/* single category */}
        <div className='single-category'>
                    <h5 className='title'>Trending Now</h5>
                    <Swiper 
                        slidesPerView={slug.grid}
                        spaceBetween={10}
                        slidesPerGroup={7}
                        freeMode={true}
                        loop={true}
                        mousewheel={true}
                        loopFillGroupWithBlank={false}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, FreeMode, Navigation, Mousewheel]}
                        className="movies"
                    >
                        {/* single movie */}
                            <SwiperSlide className='single-movie' onClick={handleMovieClick}>
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

                       
                    </Swiper>
                    
                    {/* movie modal */}
                    <div className={`card-info ${slug.isModalOpen ? 'displayBlock' : '' }`}>
                            <div className='content'>
                                <div className='movie-info'>
                                    <img className='movie-image' src={Movie_img_1} alt="info image"/> 
                                    <span className='close-icon' onClick={handleMovieClick}><AiOutlineClose/></span>
                                    <div className='controls'>
                                        <a className='control-icon play-icon'><FaPlay/> Play</a>
                                        <a className='control-icon'><AiOutlinePlus/></a>
                                        <a className='control-icon'><AiOutlineLike/></a>
                                        <a className='control-icon'><AiOutlineDislike/></a>    
                                    </div>
                                </div>
                                <div className='description'>
                                    <h3 className='title'>Deep Water</h3>
                                    <p className='text'>
                                    Vic and Melinda Van Allen are a couple in the small town of Little Wesley. Their loveless marriage is held together only by a precarious arrangement whereby, in order to avoid the messiness of divorce, Melinda is allowed to take any number of lovers as long as she does not desert her family.    
                                    </p>
                                    <hr/>
                                    <h5 className='sub-title'>Info on Deep Water</h5>
                                    <ul>
                                        <li>
                                            <span className='title'>Genres:</span> Drama, Mystery, Romance
                                        </li>
                                        <li>
                                            <span className='title'>Release date:</span> 2022
                                        </li>
                                        <li>
                                            <span className='title'>Average vote:</span> 5.7
                                        </li>
                                        <li>
                                            <span className='title'>Original language:</span> En
                                        </li>
                                        <li>
                                            <span className='title'>Age classification:</span> Suitable for all ages
                                        </li>
                                    </ul>
                                </div>
                            </div>    
                    </div>
                    {/* end movie modal */}

            </div>
        {/* end of single category */}
        
    </>
  )
}

export default Category