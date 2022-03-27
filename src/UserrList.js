import axios from 'axios'
import React, { useState,useEffect } from 'react'


const UserrList = () => {
    const [listOfuser,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const listOfuser = res.data;
            setUser( listOfuser );
             
        })

    },[])
 
   
  return (
      
  
   <div>
       
       <h2>List Of User:</h2>
       <ul>
       {listOfuser.map (el =>(
           <li>{el.id}:{el.username}</li>
     
        ))}
       </ul>

   </div>


  )
}

export default UserrList


