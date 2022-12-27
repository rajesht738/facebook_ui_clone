import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import "./login.scss"
const Login = () => {

    const { login } = useContext(AuthContext);
    const handleClick = () => {
        login()
    }
    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit </p>
                    <span>Don't you have an account!</span>
                    <Link to="/register"><button>Register</button></Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" name="username" id="" placeholder='username' />
                        <input type="password" name="password" id="" placeholder='password' />
                        <button onClick={handleClick}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login