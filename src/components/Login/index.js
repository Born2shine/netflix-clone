import React from 'react'
// import { FaFacebookF } from "react-icons/fa"

import Netflix_logo from "../../assets/images/netflix-logo.png"
import Form from "../Form"

function index() {
  return (
      <Form>
          <section className='login-wrapper'>
                    <div className='login-form'>
                        <h2 className='title'>Sign In</h2>
                        <form>
                            <div className='form-group'>
                                <input className='focused' type='text' name='uname' placeholder='Email or phone number' />
                                <span className='alert-message'>Please enter a valid email or phone number</span>
                            </div>
                            <div className='form-group'>
                                <input className='focused' type='password' name='pword' placeholder='Password' />
                                <span className='alert-message'>Your password must contain between 4 and 60 characters.</span>
                            </div>
                            <div className='form-group mb-2'>
                                <button className='btn btn-login'>Sign in</button>
                            </div>
                            {/* <div className='form-group mb-2'>
                                <button className='btn btn-fb-login'> <span className='fb-icon'> <FaFacebookF/> </span> Sign in with facebook</button>
                            </div> */}
                            <div className='form-group mb-2'>
                                <button className='btn btn-guest-login'> Sign in as Guest</button>
                            </div>
                            <div className='new-member'>
                                New to Netflix? <a className='sign-up' href='#'>Sign up now</a>
                            </div>
                        </form>
                    </div>
            </section>
      </Form>
  )
}

export default index