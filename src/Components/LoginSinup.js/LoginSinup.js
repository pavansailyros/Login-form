import React, { useState } from 'react'
import './LoginSingUp.css';

export default function LoginSinup() {
  const [action,setAction] = useState("Login")
  return (
    <>
      <div className='container'>
        <div className='header' >
          <div className='text'>{action}</div>
          <div className='underline'></div>
         <div className='inputs'>
          {action === "Login" ? <div></div>:  <div className='input' >
            <input type='text' placeholder='Enter  Name' />
          </div>}
        
          <div className='input' >
            <input type='email' placeholder='Enter Email' />
          </div>
          <div className='input' >
            <input type='password'  placeholder='Enter Password'/>
          </div>
         </div>
         {action === "SignUp" ? <div></div>:<div className='forgot-password' >Lost Password? <span>Click Here!</span> </div>}
         
        <div className='buttons' > 
        <button  className={action==="Login"?"btns gray":"btns" } onClick={()=>{setAction("SignUp")}} >SignUP</button> <br></br>
        <button  className={action==="SignUp" ? "btns gray" : "btns"}onClick={()=>{setAction("Login")}} >Login</button>
        </div>
        </div>
      </div>
    </>
  )
}
