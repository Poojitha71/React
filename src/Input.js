import React,{useState}from 'react'

export default function Input() {
    const[userName,setUserName]=useState('')
    const[password,setPassword]=useState('')
   
    function submit(e){
        console.log(userName)
        console.log(password)
    }

  return (
    <div>
      <p>
        <input placeholder='enter name' onChange={(e)=>{setUserName(e.target.value)}}/>
        <p>
        <input placeholder='enter password' onChange={(e)=>{setPassword(e.target.value)}}/>
        </p>
        <button onClick={submit}>Submit</button>
      </p>

      
      
    </div>
  )
}
