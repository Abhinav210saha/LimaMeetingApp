import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let[input,setInput] = React.useState('')
    let navigate = useNavigate()
    function handleJoin(){
        navigate(`/room/${input}`) // navigate to the room with the input as room id
        
    }
  return (
    <div id='Home'>
        <input type="text" placeholder='enter room id' onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button onClick={handleJoin}>Join Room</button>
    </div>
  )
}

export default Home