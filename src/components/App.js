import React from 'react'

import Header from './Header'
import ChatStream from './ChatStream'
import Footer from './Footer'

import './App.css'

const App = ({ currentUser, conversation: { messages } }) => {
  return (
    <div className='wrapper'>
      <Header />
      <ChatStream messages={messages} />
      <Footer />
    </div>
  )
}

export default App
