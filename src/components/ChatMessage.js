import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({ message: { user: { username, avatar }, body } }) => {
  return (
    <div className='chat-message'>

      <div className="avatar-container">
        <img className='avatar' src={ avatar } alt={ username } />
      </div>

      <div className="message">
        <span className='username'>{ username }</span>
        <p className='body'>{ body }</p>
      </div>

    </div>
  )
}

export default ChatMessage