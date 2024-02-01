/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  // create our refs
  const userRef = useRef();
  const errRef = useRef();

  // create user state value, user focus status, user valid state
  const [user, setUser] = useState("");
  const [userFocus, setUserFocus] = useState(false);
  const [validName, setValidName] = useState(false);

  // create password state value, password focus status, password valid state
  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  // create match password state value, match password focus status, match password valid state
  const [matchPwd, setMatchPwd] = useState("");
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);
  const [validMatch, setValidMatch] = useState(false);

  // handle the error message
  const [errMsg, setErrorMsg] = useState("");

  // handle the success message
  const [success, setSuccess] = useState(false);

  // set focus on the user input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // valid the name
  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  // valid the password &&  match password
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = matchPwd === pwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // check the validation again to avoid JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if(!v1 || !v2) {
      setErrorMsg("Regstration Falied");
      return;
    }
    console.log("user name is: ", user);
    console.log("password is: ", pwd);
    setSuccess(true);
    setUser("");
    setPwd("");
    setMatchPwd("");
  }
  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <span className="line">
            <a href="#">Sign In</a>
          </span>
        </section>
      ) : (
        < section >
        <p className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            {/* we show the true icon when the name is valid  */}
            <span className={validName ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            {/* we show the wrong icon when the name is Not valid  or 
            still uncompleted and we hide it when the  user is empty
          */}
            <span className={validName || !user ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="text"
            name="user"
            id="username"
            autoComplete="off"
            ref={userRef}
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            required
            onChange={(e) => setUser(e.target.value)}
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          {/* conditional paragraph which tells the user the cosntrains of the naming */}

          <p
            className={!validName && user ? "instructions" : "offscreen"}
            id="uidnote"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter
            <br />
            Letters, numbers, underscore, hyphen allowed.
          </p>

          {/* handle the password */}

          <label htmlFor="password">
            password:
            {/* we show the true icon when the name is valid  */}
            <span className={validPwd ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            {/* we show the wrong icon when the name is Not valid  or 
            still uncompleted and we hide it when the  password is empty
          */}
            <span className={validPwd || !pwd ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="password"
            max="24"
            name="password"
            id="password"
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            required
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          {/* conditional paragraph which tells the user the cosntrains of the naming */}

          <p
            className={!validPwd && pwdFocus ? "instructions" : "offscreen"}
            id="pwdnote"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters. <br />
            Must inclued an uppercase, lowercase letters, a number, and a
            special character. <br />
            Allowed special characters:
            <span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span>
            <span aria-label="hastag">#</span>
            <span aria-label="dollar sign">$</span>
            <span aria-label="percent">%</span>
          </p>

          {/* hadnle match the password */}

          <label htmlFor="confirm_password">
            confirm password:
            {/* we show the true icon when the name is valid  */}
            <span className={validMatch && matchPwd ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            {/* we show the wrong icon when the name is Not valid  or 
            still uncompleted and we hide it when the  match pass is empty
          */}
            <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="matchdnote"
            required
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchPwdFocus(true)}
            onBlur={() => setMatchPwdFocus(false)}
          />
          {/* conditional paragraph which tells the user the cosntrains of the naming */}

          <p
            className={
              matchPwdFocus || !validMatch && matchPwdFocus ? "instructions" : "offscreen"
            }
            id="matchdnote"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password field
          </p>

          <button
            disabled={!validName || !validMatch || !validPwd ? true : false}
          >
            Sign Up
          </button>
        </form>
        <p>
          Already Register?
          <br />
          <span className="line">
            <a href="#">Sing in</a>
          </span>
        </p>
      </section >
)}
    </>
  );
};

export default Register;
