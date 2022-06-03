import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CustomerRegistration() {
    const navigate = useNavigate();

    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();
    //const balanceInput = useRef();
    // const isAdmin = false;


    // const customer = {
            
    //     fname: "Romane",
    //     lname: "Robb",
    //     username: "romanerobb",
    //     password: "passwordrobb",
    //     balance:  10,
    //     isAdmin: false
    // }

    const url = "https://zahfosha.azurewebsites.net"

    async function customerReg(){

        const customer = {
            
            username: usernameInput.current.value,
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            password: passwordInput.current.value,
            balance: 0,
            isAdmin: false
        }

        if (customer.password === "") {
            alert("You have failed to enter a valid password! Please try again!");
        if (customer.username === "")
            alert("You have failed to enter a valid username! Please try again!");
        }else navigate("/customer");
        
        try{
        const response = await axios.post(`${url}/customer` , customer)
        // balance = 0;
        // isAdmin = false;
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
        <>
        <h2>Welcome to Zahfosha!</h2>
        <h2>Please enter your customer information below to sign up!</h2>
        <br></br>
        <input placeholder="Enter Username" ref={usernameInput}></input>
        <br></br>
        <br></br>
        <input placeholder="Enter First Name" ref={fnameInput}></input>
        <br></br>
        <br></br>
        <input placeholder="Enter Last Name" ref={lnameInput}></input>
        <br></br>
        <br></br>
        <input type="password" placeholder="Enter password" ref={passwordInput}></input>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-outline-warning btn-lg" onClick={customerReg}>Register</button>
        </>
    )

    }