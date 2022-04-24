import React, { useState } from 'react'
import {v4 as uuidV4 } from "uuid"
import toast from 'react-hot-toast'  
import { useNavigate } from 'react-router-dom'


const Home = () => {
   const[id,setId]=useState()
   const navigate=useNavigate()
   const [userName,setUserName]=useState()

    const account=()=>{
    const id=uuidV4()
    console.log(id);
    setId(id)
    toast.success('Created a new Room')
  }

  const join=()=>{
    if(!userName || !id)
    {
      toast.error("Room ID and User Name is required")
      return
    }
    else{
        navigate(`/editor/${id}`,{
            state:{
              userName 
            },
          });
      
    }

    
  }


  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <p>Paste Invtation Room Id</p>
          <input type="text" value={id} placeholder='Room ID'  onChange={(e)=>setId(e.target.value)}/>
          <input type="text" value={userName} placeholder='UserName' onChange={(e)=>setUserName(e.target.value)}/>
          <button onClick={join}>Join</button>
          <button onClick={()=>account()}>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Home