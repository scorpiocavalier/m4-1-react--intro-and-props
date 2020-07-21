import React from 'react'
import Avatar from './Avatar'
import { users } from '../data'
import './Header.css'

const getParticipantAvatars = currentUser => {
  let participants = []
  for (const user in users) {
    const { username, avatar } = users[user]
    if (currentUser.username !== username)
      participants.push(<Avatar key={Math.random()} avatar={avatar} username={username} size="avatar-md" />)
  }
  return participants
}

const Header = ({currentUser}) => {
  return <header>{ getParticipantAvatars(currentUser).map(avatar => avatar) }</header>
}

export default Header
