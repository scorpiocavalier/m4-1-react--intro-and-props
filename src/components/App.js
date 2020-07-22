import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import ChatStream from './ChatStream'
import Footer from './Footer'

const Wrapper = styled.div`
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const App = ({ currentUser, conversation: { messages } }) => {
  return (
    <Wrapper>
      <Header currentUser={currentUser} />
      <ChatStream currentUser={ currentUser } messages={messages} />
      <Footer />
    </Wrapper>
  )
}

export default App
