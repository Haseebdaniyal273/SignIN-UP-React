import React, {useState , useEffect} from 'react'
import "./Arrange.css"
import axios from 'axios'

function DataFetching() {
 
const [posts, setPosts] = useState([])

useEffect (()=>{

axios.get('http://localhost:5000/').then(res =>{
    console.log(res)
    setPosts(res.data)
})
.catch(err =>{
    console.log(err)
})
})

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
                    <td>{post.username}</td>
                    <td>{post.password}</td>
                </tr>
           

           ) )} </table>
   
</div>

    )
    

}


export default DataFetching
