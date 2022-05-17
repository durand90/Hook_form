import React, { useState } from 'react';

const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("")
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("");
    const [confirmpasswordError, setConfirmpasswordError] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, firstnameError, lastname, lastnameError, email, emailError, password, passwordError, confirmpassword, confirmpasswordError };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("First Name is required!");
        } else if(e.target.value.length < 3) {
            setFirstnameError("First Name must be 3 characters or longer!")
        } else {
            setFirstnameError("")
        }
}

    const handleLastName = (e) => {
    setLastname(e.target.value);
    if(e.target.value.length < 1) {
        setLastnameError("Last Name is required!");
    } else if(e.target.value.length < 3) {
        setLastnameError("Last Name must be 3 characters or longer!")
    } else {
        setLastnameError("")
    }
}

const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 1) {
        setEmailError("Email is required!");
    } else if(e.target.value.length < 3) {
        setEmailError("Email must be 3 characters or longer!")
    } else {
        setEmailError("")
    }
}

const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 1) {
        setPasswordError("Password is required!");
    } else if(e.target.value.length < 3) {
        setPasswordError("Password must be 3 characters or longer!")
    } else {
        setPasswordError("")
    }
}

const handleConfirmpassword = (e) => {
    setConfirmpassword(e.target.value);
    if(e.target.value.length < 1) {
        setConfirmpasswordError("Confirm Password is required!");
    } else if(e.target.value.length < 3) {
        setConfirmpasswordError("Confirm Password must be 3 characters or longer!")
    } else {
        setConfirmpasswordError("")
    }
}

return(
    <div>
    <form onSubmit={ (e) => e.preventDefault() }>
        {JSON.stringify(firstname)}
        <div>
            <label>First Name</label>
            <input type="text" value={firstname} onChange={ handleFirstName }/>
            {
                firstnameError ? <p>{ firstnameError }</p> : ""
            }
        </div>
        {console.log(firstname)}
        <div>
            <label>Last Name</label>
            <input type="text" value={lastname} onChange={ handleLastName }/>
            {
                lastnameError ? <p>{ lastnameError }</p> : ""
            }
        </div>
        <div>
            <label>Email</label>
            <input type="text" value={email} onChange={ handleEmail }/>
            {
                emailError ? <p>{ emailError }</p> : ""
            }
        </div>
        <div>
            <label>Password</label>
            <input type="password" onChange={ handlePassword }/>
            {
                passwordError ? <p>{ passwordError }</p> : ""
            }
        </div>
        <div>
            <label>Confirm Password</label>
            <input type="password" onChange={ handleConfirmpassword }/>
            {
                confirmpasswordError ? <p>{ confirmpasswordError }</p> : ""
            }
        </div>
        <input type="submit" value="Create User"/>
    </form>
    <div>
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmpassword}</p>
    </div>
    </div>
);
}

export default HookForm;