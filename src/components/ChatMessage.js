import React from 'react'
import Avatar from './Avatar'
import styled, { css } from 'styled-components'

const ChatWrapper = styled.div`
  display: flex;
  margin: 10px;
  justify-content: ${({ isCurrentUser }) => isCurrentUser && "flex-end"};
`

const AvatarWrapper = styled.div`
  display: ${({isCurrentUser}) => isCurrentUser ? "none" : "flex"};
  align-items: flex-end;
`

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DisplayName = styled.span`
  display: ${({isCurrentUser}) => isCurrentUser && "none"};
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
`

const MessageBody = styled.p.attrs(props => ({
  currenUserColor: "#fff",
  participantColor: "#000",
  currenUserBgColor: "#1185f7",
  participantBgColor: "#e9e9eb"
}))`
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  color: ${props => props.isCurrentUser ? props.currenUserColor : props.participantColor};
  background-color: ${props => props.isCurrentUser ? props.currenUserBgColor : props.participantBgColor};
`

const ChatMessage = ({
  currentUser, message: { user: { username, avatar }, body }
}) => {

  const isCurrentUser = currentUser.username === username

  return (
    <ChatWrapper isCurrentUser={isCurrentUser}>
      <AvatarWrapper isCurrentUser={isCurrentUser}>
        <Avatar avatar={avatar} username={username} sm />
      </AvatarWrapper>

      <MessageWrapper>
        <DisplayName isCurrentUser={isCurrentUser}>{username}</DisplayName>
        <MessageBody isCurrentUser={isCurrentUser}>{body}</MessageBody>
      </MessageWrapper>
    </ChatWrapper>
  )
}

export default ChatMessage