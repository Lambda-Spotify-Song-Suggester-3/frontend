import React from "react";

function SignUpForm(props) {

  const {
    values,
    onInputChange,
    onCheckboxChange,
    handleSubmit,
    errors,
  } = props;

  return (
    <>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="errors">
        </div>

        <label className="username-input">
          Username{" "}
          {<p>{errors.username}</p>}
          <input
            value={values.username}
            onChange={onInputChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          Password{" "}
          {<p>{errors.password}</p>}
          <input
            value={values.password}
            onChange={onInputChange}
            name="password"
            type="password"
          />
        </label>
        <label>
          Confirm Password{" "}
          {<p>{errors.terms}</p>}
          <input
            value={values.confirmPassword}
            onChange={onInputChange}
            name="confirmPassword"
            type="password"
          />
        </label>
        <label className="terms-input">
          Terms and Conditions{" "}
          <input
            value={values.terms}
            onChange={onCheckboxChange}
            name="terms"
            type="checkbox"
          />
        </label>
        <button name="submit">Create Account</button>
      </form>
    </>
  );
}

export default SignUpForm;
