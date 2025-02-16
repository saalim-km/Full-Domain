import {useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [message,setMessage] = useState("");

    function sendMessageToParent(data) {
      setMessage(data);
    }
  return (
    <div>
        <h1>parent component</h1>
        <p>Message from child :  {message}</p>
        <Child sendMessToParent = {sendMessageToParent}/>
    </div>
  )
}

export default Parent
