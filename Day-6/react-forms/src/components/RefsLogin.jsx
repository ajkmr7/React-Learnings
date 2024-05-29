import { useRef, useState } from "react";

/* ----------- Handling with refs ----------- */

export default function Login() {
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const isEmailValid = enteredEmail.includes("@");

    if (!isEmailValid) {
      setIsEmailInvalid(true);
      return;
    }

    setIsEmailInvalid(false);

    console.log(enteredEmail, enteredPassword);

    // ! Imperative Approach - should be avoided
    // email.current.value = ""
    // password.current.value = ""

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {isEmailInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
