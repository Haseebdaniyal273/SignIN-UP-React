import React, { useState } from 'react'
import Login from "./Login"

function Register()
{
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")

async function signup()
{
    let item = {name,email,phone,username,password}
    console.warn(item)

    let result = await fetch("http://localhost:5000/",{

    method:'POST',
    body:JSON.stringify(item),

    headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
        
    }

    })

    result = await result.json()
    localStorage.setItem("users",JSON.stringify(result))
    console.warn(result)
    
}

return(
    
<div className='col-sm-6 offset-sm-3 py-5'>
<h1>Register Page</h1><br/>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder='name'></input><br/>
<input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder='email'></input><br/>
<input type="number"  value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder='phone'></input><br/>
<input type="text"  value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder='username'></input><br/>
<input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder='password'></input><br/>

<button onClick={signup} className='btn btn-success'>Sign up</button>
</div>


)


}
export default Register