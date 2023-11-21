import React, { useEffect, useRef, useState } from 'react'
import logoName from '../assets/sigmahealthpro-converted-3@2x.png';
import logo from '../assets/sigmahealthpro-converted-4@2x.png';
import backGroungImg from '../assets/whitepapertexture-1@2x.png'
import vector from '../assets/vector-12.svg';
import './SignupPatient.css'
import axios from '../api/axios';


const SignupPatient = () => {
    const firstNameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [validFirstName, setValidFirstName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    firstNameRef.current.focus();
    console.log('firstNameRef:', firstNameRef);
  }, []);

  useEffect(() => {
    setValidFirstName(firstName.length > 0);
  }, [firstName]);

  useEffect(() => {
    setValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail));
  }, [enteredEmail]);

  useEffect(() => {
    setValidPassword(password.length >= 8);
  }, [password]);

  useEffect(() => {
    setValidConfirmPassword(confirmPassword === password);
  }, [confirmPassword, password]);

  useEffect(() => {
    setErrMsg('');
  }, [firstName, enteredEmail, password, confirmPassword]);

  const handleCreateAccount = async () => {
    // Validation checks
    if (!validFirstName || !validEmail || !validPassword || !validConfirmPassword) {
      setErrMsg('Invalid Entry');
      errRef.current.focus();
      return;
    }

    // API request to create account
    try {
        const response = await fetch('http://restapi.adequateshop.com/api/authaccount/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: firstName, // Adjusted to match the API request structure
        email: enteredEmail,
        password,

      }),
    });
    const responseData = await response.json();

      if (response.ok) {
        // Registration success
        console.log(responseData.data);

        // Store the token or handle it as needed for secure API calls
        const authToken = responseData.data.Token;
        console.log(authToken);
        setSuccess(true);

        // Clear state and controlled inputs
        setFirstName('');
        setLastName('');
        setEnteredEmail('');
        setPhoneNumber('');
        setCountry('');
        setPassword('');
        setConfirmPassword('');
      } else if (response.status === 409) {
        // Email already in use
        setErrMsg('The email address you have entered is already registered');
        errRef.current.focus();
      } else {
        // Other error
        setErrMsg('Account Creation Failed');
        errRef.current.focus();
      }
    } catch (err) {
      // Network or server error
      setErrMsg('No Server Response');
      errRef.current.focus();
    }
  };

  

    //   console.log(response?.data);
    //   console.log(response?.accessToken);

//       setSuccess(true);

//       // Clear state and controlled inputs
//       setFirstName('');
//       setLastName('');
//       setEnteredEmail('');
//       setPhoneNumber('');
//       setCountry('');
//       setPassword('');
//       setConfirmPassword('');
//     } catch (err) {
//       if (!err?.response) {
//         setErrMsg('No Server Response');
//       } else if (err.response?.status === 409) {
//         setErrMsg('Email Taken');
//       } else {
//         setErrMsg('Account Creation Failed');
//       }
//       errRef.current.focus();
//     }
//   };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEnteredEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div className="login-page">

      <div className="loginLogo">
        <img className="logoName" alt="" src={logoName} />
        <img className="logo" alt="" src={logo} />
      </div>
      <img className="backGroungImg" alt="" src={backGroungImg} />
      <div className="loginContainer">
        <div className="container">
          <div className="containerHeader">{`Sign Up `}</div>
          <div className="emailContainer1">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <input
              className="input-field"
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First Name"
              ref={firstNameRef}
            />
           
            <input
              className="input-field"
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last Name"
            />
            <input
              className="input-field"
              type="text"
              value={enteredEmail}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            <input
              className="input-field"
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Phone Number"
            />
            <input
              className="input-field"
              type="text"
              value={country}
              onChange={handleCountryChange}
              placeholder="Country"
            />
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <input
              className="input-field"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
            />
            <button className="create-account-btn" onClick={handleCreateAccount}>
            Create Account
          </button>
          </div>
          </div>
      </div>
    </div>
  )
}
  
export default SignupPatient