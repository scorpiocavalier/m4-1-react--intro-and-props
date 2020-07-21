import React from 'react'
import './Avatar.css'

const Avatar = ({avatar, username, size}) => {
  return <img className={'avatar ' + size} src={avatar} alt={username} />
}

export default Avatar