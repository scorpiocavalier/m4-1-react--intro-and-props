import React from 'react'
import './ChatStream.css'

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = ({ messages }) => {
  console.log('chatstream', messages)
  return (
    <section className='chat-stream'>
      {
        messages.map(({ id, body, timestamp }) => body)
      }
    </section>)
}

export default ChatStream;
