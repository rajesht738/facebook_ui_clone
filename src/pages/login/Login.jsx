import React from 'react'
import "./login.scss"
const Login = () => {
  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit </p>
                <span>Don't you have an account!</span>
                <button>Register</button>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" name="username" id="" placeholder='username' />
                    <input type="password" name="password" id="" placeholder='password'/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login