import React from 'react'

import Category from "../Category"

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";



import Hero from "../../components/Hero"

function index() {
  return (
    <section className='main-wrapper'>
        <Hero/>  
        <div className='movies-wrapper'>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
        </div>
        <footer className='designed-by'> Designed with <span className='heart'>❤</span> by Odoh Friday </footer>
    </section>  
  )
}

export default index