import React from 'react'
import Netflix_logo from "../../assets/images/netflix-logo.png"


function index({children}) {
  return (
    <section className='main'>
            <div className='logo'>
                <img src={Netflix_logo} alt='Netflix Logo'/>
            </div>
            {children}
      </section>
  )
}

export default index