import React, { useEffect, useState } from "react";
import axios from "axios";
function Table(){
    const [postInfo,setPostInfo] = useState([])
    async function getPostsDat(){
        const postdata =await axios.get('https://jsonplaceholder.typicode.com/posts')
        
        setPostInfo(postdata?.data)
    } 
    console.log('postInfo:',postInfo)
    useEffect(() =>{
        getPostsDat()
    },[])
const [firstName,setfirstName] = useState('')
const [lastName,setlastName] = useState('')
const [email,setemail] = useState('')
const [contact,setcontact] =useState('')
const [password,setpassword] =useState('')

console.log("firstName:", firstName)
console.log("lastName:",lastName)
console.log("email:",email)
console.log("contact:",contact)
console.log("passowrd:",passowrd)

async function handleSavedata(e) {
  e.preventDefault()

  const data = await
  
}


    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {postInfo.map((item) =>(
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.body}</td>
      <td>{item.userId}</td>
    </tr>
    ))}
  </tbody>
</table>
    )
}

export default Table