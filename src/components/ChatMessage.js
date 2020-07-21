import React from 'react'
import Avatar from './Avatar'
import './ChatMessage.css'

const ChatMessage = ({
  currentUser, message: { user: { username, avatar }, body }
}) => {

  const isCurrentUser = currentUser.username === username

  return (
    <div className={"chat-message" + (isCurrentUser ? " justified-right" : "")}>
      {
        !isCurrentUser &&
        <div className="avatar-container">
          <Avatar avatar={avatar} username={username} size="avatar-sm" />
        </div>
      }

      <div className="message">
        {!isCurrentUser && <span className='username'>{username}</span>}
        <p className={isCurrentUser ? "currentUser body" : "participant body"}>{body}</p>
      </div>
    </div>
  )
}

export default ChatMessage