import React, { useEffect } from 'react'

import { AiOutlineClose, AiOutlinePlus, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination, Navigation, Mousewheel } from "swiper";
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import axios from 'axios'

import Movie_img from "../../assets/images/movie-img.jpg"
import Movie_img_1 from "../../assets/images/movie-img-1.jpg"

import { setWindowSize, toggleMovieModal } from '../../store/slug-actions'
import { MovieActions } from '../../store/movies-slice'


const Category = () => {
    const dispatch = useDispatch()

    const slug = useSelector((state) => state.slug)
    const movies = useSelector((state) => state.movies.genre)
    const singleMovie = useSelector((state) => state.movies.singleMovie)
    const windowResizeHandler = () => dispatch(setWindowSize())
    const handleMovieClick = (id) => {
        const movie = fetchSingleMovie(id)
        dispatch(toggleMovieModal())
    }

    // Endpoints
    // https://api.themoviedb.org/3/trending/all/day?api_key
    // https://api.themoviedb.org/3/genre/movie/list?api_key=40065fcc6ec5516babdfc4768e70ab59&language=en-US
    // https://api.themoviedb.org/3/movie/294793?api_key=40065fcc6ec5516babdfc4768e70ab59&language=en-US
    // https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg

    // https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

    // https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1&with_genres=28

    const CLIENT_ID = `?api_key=${process.env.REACT_APP_API_KEY}`
    const TRENDING_URL = `https://api.themoviedb.org/3/trending/all/day${CLIENT_ID}`
    const MOVIE_LIST_URL = `https://api.themoviedb.org/3/genre/movie/list${CLIENT_ID}&language=en-US`
    const MOVIE_BY_GENRE = `https://api.themoviedb.org/3/discover/movie${CLIENT_ID}&language=en-US&sort_by=popularity.desc&page=1&with_genres=`
    const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/`
    // const MOVIE_IMAGE = `https://image.tmdb.org/t/p/w500${IMAGE_PATH}`
    let allMovies = []
    const fetchMovies = async () => {
        const res = await axios
        .all([
            axios.get(TRENDING_URL),
            axios.get(`${MOVIE_BY_GENRE}28`),
            axios.get(`${MOVIE_BY_GENRE}12`),
            axios.get(`${MOVIE_BY_GENRE}16`),
            axios.get(`${MOVIE_BY_GENRE}878`),
            axios.get(`${MOVIE_BY_GENRE}10751`),
            axios.get(`${MOVIE_BY_GENRE}18`),
            axios.get(`${MOVIE_BY_GENRE}10749`),
            axios.get(`${MOVIE_BY_GENRE}80`),
            axios.get(`${MOVIE_BY_GENRE}27`),
            axios.get(`${MOVIE_BY_GENRE}35`),
        ])
        .then(axios.spread((trending, action, adventure, animation, sci_fi, family, drama, romance, crime, horror, comedy) => {
            allMovies.push(
                {
                    title: 'trending',
                    movies: trending.data.results
                },
                {
                    title: 'action',
                    movies: action.data.results
                },
                {
                    title: 'adventure',
                    movies: adventure.data.results
                },
                {
                    title: 'animation',
                    movies: animation.data.results
                },
                {
                    title: 'sci_fi',
                    movies: sci_fi.data.results
                },
                {
                    title: 'family',
                    movies: family.data.results
                },
                {
                    title: 'drama',
                    movies: drama.data.results
                },
                {
                    title: 'romance',
                    movies: romance.data.results
                },
                {
                    title: 'crime',
                    movies: crime.data.results
                },
                {
                    title: 'horror',
                    movies: horror.data.results
                },
                {
                    title: 'comedy',
                    movies: comedy.data.results
                }
            )
            allMovies.forEach((data) => {
                 dispatch(
                    MovieActions.getMovies({
                        title: data.title,
                        movies: data.movies
                    })
                )
            })
        }))
        .catch((err) => {
            console.log("Error", err)
        })
    }

    const fetchSingleMovie = async (movie_id) => {
        const res = await axios
        .get(`${MOVIE_DETAILS}${movie_id}${CLIENT_ID}&language=en-US`)
        .then((res) => {
            dispatch(MovieActions.getSingleMovie({
                movie: res.data
            }))
        })
        .catch(error => {
            console.log(error)
        })
    }

    // const fetchMovies = async () => {
    //     const res = await axios
    //     .get(TRENDING_URL)
    //     .catch((err) => {
    //         console.log("Error", err)
    //     })
    //     dispatch(
    //         MovieActions.getMovies({
    //             title: 'trending',
    //             movies: res.data.results
    //         })
    //     )
    //     // console.log(res.data.results)
    // }

    const capitalize = (word) => {
        return word === 'sci_fi' ? 'Science Fiction' :
        word.slice(0,1).toUpperCase() + word.slice(1, word.length).toLowerCase()
    }

    useEffect(() =>{
        fetchMovies()
        // fetchMov()
    },[])

    useEffect(() => {
        window.addEventListener('resize', windowResizeHandler)
        windowResizeHandler()
        return () => window.removeEventListener('resize', windowResizeHandler)
    }, [slug.winSize]);
  return (
    <>
        {/* single category */}
            { movies &&
                movies.map((movie, index) => (
                <div key={index} className='single-category'>
                        <h5 className='title'>{capitalize(movie.title)}</h5>
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
                                {
                                    movie.movies.map((data, index) => (
                                        <SwiperSlide key={index} className='single-movie' onClick={() => handleMovieClick(data.id)}>
                                    <img className='movie-img' src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="movie image" />
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
                                            <h4 className='name'>{data.title}</h4>
                                            <ul>
                                                <li>Action</li>
                                                <li>Adventure</li>
                                                <li>Science Fiction</li>
                                            </ul>
                                        </div>  
                                    </div>
                                </SwiperSlide>
                                    ))
                                }
                            {/* end of single movie */}

                        
                        </Swiper>
                        
                        {/* movie modal */}
                       {singleMovie && <div className={`card-info ${slug.isModalOpen ? 'displayBlock' : '' }`}>
                                <div className='content'>
                                    <div className='movie-info'>
                                        <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${singleMovie.backdrop_path}`} alt="info image"/> 
                                        <span className='close-icon' onClick={() => handleMovieClick(singleMovie.id)}><AiOutlineClose/></span>
                                        <div className='controls'>
                                            <a className='control-icon play-icon'><FaPlay/> Play</a>
                                            <a className='control-icon'><AiOutlinePlus/></a>
                                            <a className='control-icon'><AiOutlineLike/></a>
                                            <a className='control-icon'><AiOutlineDislike/></a>    
                                        </div>
                                    </div>
                                    <div className='description'>
                                        <h3 className='title'> {singleMovie.title}</h3>
                                        <p className='text'>
                                            {singleMovie.overview}
                                        </p>
                                        <hr/>
                                        <h5 className='sub-title'>Details of {singleMovie.title}</h5>
                                        <ul>
                                            <li>
                                                <span className='title'>Genres: </span> 
                                                {
                                                    singleMovie.genres.map((data)=>{
                                                        return (
                                                            data.name + ', '
                                                        )
                                                    })
                                                }
                                                {/* Drama, Mystery, Romance */}
                                            </li>
                                            <li>
                                                <span className='title'>Release date:</span> {singleMovie.release_date}
                                            </li>
                                            <li>
                                                <span className='title'>Average vote:</span> {singleMovie.vote_average}
                                            </li>
                                            <li>
                                                <span className='title'>Original language:</span> {capitalize(singleMovie.original_language)}
                                            </li>
                                            <li>
                                                <span className='title'>Age classification:</span> Suitable for all ages
                                            </li>
                                        </ul>
                                    </div>
                                </div>    
                        </div>}
                        {/* end movie modal */}

                </div>
                ))
            }
        {/* end of single category */}
        
    </>
  )
}

export default Category