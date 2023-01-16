import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login(props) {
  const navigate = useNavigate();
  const { loginCbHandler } = props;

  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      let assistants = await axios({
        method: "POST",
        url: "http://localhost:3000/server/assistants/login",
        data: form,
      });
      //   console.log(assistants.data)
      const access_token = assistants.data;
      localStorage.setItem("access_token", access_token);
      loginCbHandler(true);
      // console.log(access_token)
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = () => {
    loginUser();
    // console.log(loginUser)
  };

  return (
    <>
      <div className="login-page">
        <div className="login-component mx-auto">
          <div className="my-3 w-100 text-center">
            <h4>Welcome!</h4>
            <p>Please Login</p>
          </div>
          <div className="text-center my-3">
          <img
                  className="img-fluid rounded"
                  src="https://www.nicepng.com/png/full/43-433284_medical-png.png" alt=""
                />
          </div>
          <div className="w-75 mx-auto text-center">
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input
                required={true}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="name"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">*</span>
              <input
                required={true}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="password"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="mb-3">
              <button onClick={() => submitHandler()} className="btn btn-light">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
