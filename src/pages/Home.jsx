import React, { useState } from 'react'
 import {v4 as uuidV4 } from "uuid"
  
const Home = () => {
   const[id,setId]=useState()
   const[userName,setUserName]=useState()
  
    const account=()=>{
    const id=uuidV4()
    console.log(id);
    setId(id)
  }


  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <p>Paste Invtation Room Id</p>
          <input type="text" value={id} placeholder='Room ID'  onChange={(e)=>setId(e.target.value)}/>
          <input type="text" value={userName} placeholder='UserName' onChange={(e)=>setUserName(e.target.value)}/>
          <button>Join</button>
          <button onClick={()=>account()}>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Home