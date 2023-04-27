import React, {useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import "./Arrange.css"
import axios from 'axios'

function DataFetching() {
 
const [posts, setPosts] = useState([])

//////////////////////
const [username,setUsername]=React.useState("");
const [password,setPassword]=React.useState("");
const navigate = useNavigate();
/////////////////////

useEffect (()=>{

axios.get('http://localhost:5000/').then(res =>{
    console.log(res)
    setPosts(res.data)
})
.catch(err =>{
    console.log(err)
})
})

const next = ()=>{
if(username == "Daniyal273" )
{
  navigate("/")
}else{
  alert("Not working")
}

}

return (
<div className='container-fluid py-4'>
<table className='table BORDER=”2″'>
                <tr className='bg-success'>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
        {posts.map(post => (
            // <li key={post.id}>{post.name}</li>
           
                <tr>
                    <td>{post.id}</td>
                    <td>{post.name}</td>
                    <td>{post.email}</td>
                    <td>{post.phone}</td>
                    <td>{post.username }</td>
                    <td>{post.password}</td>
                </tr>
           

           ) )} </table>
<div className="login">
       <h1>Login</h1>
      <input type="text" className = "inputBox" placeholder="Enter Username" 
      onChange={(e)=> setUsername(e.target.value)} value={username} />
      <input type="password" className = "inputBox" placeholder="Enter Password" 
      onChange={(e)=> setPassword(e.target.value)} value={password} />
    <button onClick={next} className="appButton" type="button">Login</button>
</div>


</div>

    )
    

}


export default DataFetching



















// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () =>{

//   const [username,setUsername]=React.useState("");
//   const [password,setPassword]=React.useState("");
//   const navigate = useNavigate();
//   const handleLogin = async () =>{
//     console.warn("username,password",username,password)
//     let result = await fetch('http://localhost:5000/',{
//     method: 'get',
//     body:JSON.stringify({username,password}),
//     headers:{
//       "Content-Type":'application/json',
//       "Accept":'application/json'
//     }
//     });
//     result = await result.json();
//     console.warn(result)

//   }


//   return(
//     <div className="login">
//       <h1>Login</h1>
//       <input type="text" className = "inputBox" placeholder="Enter Username" 
//       onChange={(e)=> setUsername(e.target.value)} value={username} />
//       <input type="password" className = "inputBox" placeholder="Enter Password" 
//       onChange={(e)=> setPassword(e.target.value)} value={password} />
//     <button onClick={handleLogin} className="appButton" type="button">Login</button>
    
//     <button onClick={next} className="appButton" type="button">next</button>
//     </div>


//   )


// }
// export default Login