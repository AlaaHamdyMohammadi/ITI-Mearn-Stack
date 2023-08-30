import { useState } from "react";

function SignUp() {
  const [content, setContent] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    nemaErr: "",
    emailErr: "",
    userNameErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });

  function handleValidate(e) {
    if (e.target.name === "name") {
      setContent({ ...content, name: e.target.value });
      setError({
        ...error,
        nameErr:
          e.target.value.length == 0
            ? "Name is required!"
            : e.target.value.length <= 5
            ? "Name must be at least 5 character"
            : "",
      });
    } else if (e.target.name === "email") {
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
    } else if (e.target.name === "userName") {
      setContent({ ...content, userName: e.target.value });
      setError({
        ...error,
        userNameErr:
          e.target.value.length == 0
            ? "userName is required!"
            : e.target.value.includes(' ')
            ? "Invalid spaces in username"
            : "",
      });
    }
    else if (e.target.name === "password") {
      const testPassword = e.target.value;
      const uppercaseRegex = /[A-Z]/;
      // const digitRegex = /\d/;
      const specialCharRegex = /[@$!%*?&]/;
      setContent({ ...content, password: e.target.value });
      setError({
        ...error,
        passwordErr:
          testPassword.length == 0
            ? "Password is required!"
            : testPassword.length <= 8
            ? "Password must be at least 8 character"
            : !uppercaseRegex.test(testPassword)
            ? "Password must be at least 1 uppercase character"
            : !specialCharRegex.test(testPassword)
            ? "Password must be at least 1 special character"
            : "",
      });
    }
    else if (e.target.name === "confirmPassword") {
      const testPassword = e.target.value;
      const uppercaseRegex = /[A-Z]/;
      // const digitRegex = /\d/;
      const specialCharRegex = /[@$!%*?&]/;
      setContent({ ...content, confirmPassword: e.target.value });
      setError({
        ...error,
        confirmPasswordErr:
          testPassword.length == 0
            ? "Password is required!"
            : testPassword.length <= 8
            ? "Password must be at least 8 character"
            : !uppercaseRegex.test(testPassword)
            ? "Password must be at least 1 uppercase character"
            : !specialCharRegex.test(testPassword)
            ? "Password must be at least 1 special character"
            : "",
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="m-3 w-25"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={`form-control ${
            error.nameErr && "border-danger shadow-none"
          }`}
          id="formGroupExampleInput"
          value={content.name}
          onChange={(e) => {
            handleValidate(e);
          }}
          name="name"
        />
        <p className="text-danger">{error.nameErr}</p>
      </div>
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
        <label htmlFor="formGroupExampleInput" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className={`form-control ${
            error.userNameErr && "border-danger shadow-none"
          }`}
          id="formGroupExampleInput"
          value={content.userName}
          onChange={(e) => {
            handleValidate(e);
          }}
          name="userName"
        />
        <p className="text-danger">{error.userNameErr}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Password
        </label>
        <input
          type="password"
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
        <p className="text-danger">{error.passwordErr}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className={`form-control ${
            error.confirmPasswordErr && "border-danger shadow-none"
          }`}
          id="formGroupExampleInput2"
          value={content.confirmPassword}
          onChange={(e) => {
            handleValidate(e);
          }}
          name="confirmPassword"
        />
        <p className="text-danger">{error.confirmPasswordErr}</p>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
