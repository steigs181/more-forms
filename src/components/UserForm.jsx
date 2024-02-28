import React, { useState } from 'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [notBlank, setNotBlank] = useState(false);  // default value of false
    
    const createUser = (e) => {
        e.preventDefault();

        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    	setFirstName("");
    	setLastName("");
    	setEmail("");
    	setPassword("");
        setConfPassword("");
    };
    
    const isBlank = (e) => {
        if (e.target.value.length < 1) {
	    return setNotBlank( false ) ;
	} else {
	    return setNotBlank( true );
	}
    };
    
    return (
        <form onSubmit={ createUser }>

            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            
            {firstName < 2 && <p>First Name must be at least 2 characters </p>}
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            {lastName <2 && <p>Last Name must be atleast 2 characters</p>}
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {email < 2 && <p>Email must be at least 2 characters</p>}
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                {password < 8 && <p>Password must be at least 8 characters</p>}
                {password !== confPassword && <p>Passwords do not match</p>}
            </div>
            <div>
                <label>Confirm PW: </label>
                <input type="text" value={confPassword} onChange={ (e) => setConfPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
