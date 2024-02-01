/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "../api/axios";
// const REGISTER_URL = "/register";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Regsiter = () => {
  const userRef = useRef();
  const errRef = useRef();

  // handling the user value and focsing
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // handling the passowrd value and focsing
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // handling the passowrd matching with the first password and focsing
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFoucs, setMatchFoucs] = useState(false);

  // handling the fial or the success of regestration
  const [errMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // user name validation
  useEffect(() => {
    const result = USER_REGEX.test(user); // return boolean value
    // console.log(user);
    // console.log(result);

    // result return true of false depinding on the matching operation
    setValidName(result);
  }, [user]);

  // password validation
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(pwd);
    // console.log(result);

    setValidPwd(result);
    // here we check the matching of the two passwords
    const match = matchPwd === pwd; // its a conditional value => true of false
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if the button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrorMsg("Invalid Entry");
      return;
    }
    //when you need to send the data to an api, use this
    /*
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          user,
          pwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setSuccess(true);
      // clear the input fileds
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.respsonse) setErrorMsg("No Server Response");
      else if (err.response?.status === 409) setErrorMsg("user name taken");
      else setErrorMsg("Regsitration Failed");

      errRef.current.focus();
    }
    */

    console.log("user name: ", user);
    console.log("password: ", pwd);
    setSuccess(true);

    //clear the input fileds
    setUser("");
    setPwd("");
    setMatchPwd("");
  };
  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <span>
            <a href="#">Login in</a>
          </span>
        </section>
      ) : (
        <section>
          <p className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} /> {/* valid user name */}
              </span>
              {/*  */}
              <span className={validName || !user ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="text"
              name="user"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={user && !validName ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, undersconers, hyphen allowed.
            </p>

            {/* Passwrod section */}
            <label htmlFor="password">
              Password:
              <span className={validPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validPwd || !pwd ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>

            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
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
            {/* Matched passwords */}
            <label htmlFor="confirm_password">
              confirm password:
              <span className={validMatch && matchPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} /> {/* x */}
              </span>
            </label>
            <input
              type="password"
              name="confirm_pass"
              id="confirm_password"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFoucs(true)}
              onBlur={() => setMatchFoucs(false)}
            />
            <p
              className={
                matchFoucs && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field
            </p>
            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already Register? <br />
            <span className="line">
              <a href="#">Sign in</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Regsiter;
