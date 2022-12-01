import React from 'react'
import { Link } from 'react-router-dom'
import "./register.scss"
const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
            <h1>Hello World</h1>
                <p>Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit </p>
                <span>Do you have an account!</span>
               <Link to="/login"><button>Login</button></Link>
              </div>
            <div className="right">
            <h1>Register</h1>
                <form action="">
                    <input type="text" name="username" id="" placeholder='username' />
                    <input type="email" name="email" id="" placeholder='email'/>
                    <input type="password" name="password" id="" placeholder='password'/>
                    <input type="text" name="name" id="" placeholder='name'/>
                    <button>Register</button>
                </form>
           
            </div>
        </div>
    </div>
  )
}

export default Register