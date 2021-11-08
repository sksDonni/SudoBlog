import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import {loginUser} from "../../redux/actionCreators/users"
import {useDispatch, useSelector} from "react-redux"

function Login() {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const router = useHistory()
  const token = useSelector(state => state.users.authData)
  if(token)
  {
    router.push("/posts")
  }
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const values = {
      email,
      password
    }
    console.log(values);
    dispatch(loginUser(values, router));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container w-1/2 m-auto">
          <h3 className="text-center text-3xl font-medium">Login</h3>
          <div className="flex mt-4">
            <div className="w-1/2">
              <img src="" alt="" className="w-1/2" />
            </div>
            <div className="grid w-1/2">
              <div className="mt-2">
                <label htmlFor="emailId" className="text-md">
                  Email-Id
                </label>
                <input
                  className="block mt-2 p-1 w-3/4 mr-auto border-2 border-black font-medium text-lg"
                  type="text"
                  id="emailId"
                  placeholder="Enter your email here"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="text-md">
                  Password
                </label>
                <input
                  className="block mt-2 p-1 w-3/4 mr-auto border-2 border-black font-medium text-lg"
                  type="password"
                  id="password"
                  placeholder="Enter your password here"
                  onChange = {(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="text-md font-medium p-1 w-1/4 border-2 border-blue-500 bg-blue-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <h5 className="text-sm font-sm mt-5 text-center">
            Don't have an account already?
            <Link to="" className="text-red-500 ml-2">
              Register here!!
            </Link>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default Login;
