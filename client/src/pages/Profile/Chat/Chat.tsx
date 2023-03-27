import React from 'react'
import './chat.scss'

function Chat() {
  return (
    <div className='chat flex'>
        <div className="chat-bar flex">
            <input type="text"
                placeholder='chat box'
            />
            <button>send</button>
        </div>
    </div>
  )
}

export default Chat