import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';

const Login = () => {

  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const [typePass, setTypePass] = useState(false)

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(userData))
}

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Brand Name</h3>
        {/* <img id="auth_logo" src={logo} alt="logo" /> */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email"
            aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>

          <div className="pass">

            <input type={typePass ? "text" : "password"}
              className="form-control" id="exampleInputPassword1"
              onChange={handleChangeInput} value={password} name="password" />

            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? <i class="fas fa-eye-slash"></i> : <i class="fas fa-eye"></i>}
            </small>
          </div>

        </div>

        <button type="submit" className="btn btn-info w-100"
          disabled={email && password ? false : true}>
          Login
        </button>

        <p className="my-2">
          You don't have an account? <Link to="/register" style={{ color: "#2FBCBC" }}>Register Now</Link>
        </p>
      </form>
    </div>
  )
}

export default Login