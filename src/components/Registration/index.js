import React from 'react'
import Form from "../Form"

function index() {
  return (
    <Form>
        <section className='login-wrapper'>
                    <div className='login-form'>
                        <h2 className='title'>Sign Up</h2>
                        <form>
                            <div className='form-group'>
                                <input className='focused' type='text' name='fullname' placeholder='Your name' />
                                <span className='alert-message'>Please enter your name</span>
                            </div>
                            <div className='form-group'>
                                <input className='focused' type='email' name='email' placeholder='E-mail' />
                                <span className='alert-message'>Please enter a valid email address.</span>
                            </div>
                            <div className='form-group'>
                                <input className='focused' type='password' name='pword' placeholder='Password' />
                                <span className='alert-message'>The password should have a length between 6 and 30 characters.</span>
                            </div>
                            <div className='form-group'>
                                <input className='focused' type='retype-password' name='pword' placeholder='Re-type Password' />
                                <span className='alert-message'>Passwords should match</span>
                            </div>
                            <div className='form-group mb-2'>
                                <button className='btn btn-login'>Sign in</button>
                            </div>
                            <div className='new-member'>
                                Do you have an account? <a className='sign-up' href='#'>Sign in</a>
                            </div>
                        </form>
                    </div>
            </section>
    </Form>
  )
}

export default index