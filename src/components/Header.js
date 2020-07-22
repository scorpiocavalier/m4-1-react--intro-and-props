import React from 'react'
import Avatar from './Avatar'
import { users } from '../data'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 100px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15),
  0px 1px 0.5px rgba(0, 0, 0, 0.075);
  /*
    Protip: layering multiple box shadows can create a
    richer shadow effect than just using a single one.
  */
`

const ParticipantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ParticipantName = styled.span`
  font-size: 12px;
  padding: 5px;
  font-weight: 600;
`

const getParticipantAvatars = currentUser => {
  let participants = []
  for (const user in users) {
    const { username, avatar } = users[user]
    if (currentUser.username !== username)
      participants.push(
        <ParticipantsWrapper>
          <Avatar key={Math.random()} avatar={avatar} username={username} md />
          <ParticipantName>{username}</ParticipantName>
        </ParticipantsWrapper>
      )
  }
  return participants
}

const Header = ({currentUser}) => <StyledHeader>{ getParticipantAvatars(currentUser) }</StyledHeader>

export default Header