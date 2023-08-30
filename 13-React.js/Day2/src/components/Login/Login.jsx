import { AiFillEyeInvisible } from "react-icons/ai";

<AiFillEyeInvisible />

import { useState } from "react";

function Login() {
  const [content, setContent] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleValidate(e) {
    if (e.target.name === "email") {
      setContent({ ...content, email: e.target.value });
      setError({
        ...error,
        emailErr:
          e.target.value.length == 0
            ? "Email is required!"
            : e.target.value.includes("@")
            ? ""
            : "Invalid Email",
      });
    } else if (e.target.name === "password") {
      setContent({ ...content, password: e.target.value });
      setError({
        ...error,
        passwordErr:
          e.target.value.length == 0
            ? "Password is required!"
            : e.target.value.length <= 8
            ? "Password must be at least 8 character"
            : "",
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="m-3 w-25"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className={`form-control ${
            error.emailErr && "border-danger shadow-none"
          }`}
          id="formGroupExampleInput"
          value={content.email}
          onChange={(e) => {
            handleValidate(e);
          }}
          name="email"
        />
        <p className="text-danger">{error.emailErr}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          className={`form-control ${
            error.passwordErr && "border-danger shadow-none"
          }`}
          id="formGroupExampleInput2"
          value={content.password}
          onChange={(e) => {
            handleValidate(e);
          }}
          name="password"
        />
        <button className="btn btn-danger" onClick={togglePassword}>
          {showPassword ? "Hide" : "Show"}
        </button>
        <p className="text-danger">{error.passwordErr}</p>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100">
          Login <AiFillEyeInvisible />
        </button>
      </div>
    </form>
  );
}

export default Login;
