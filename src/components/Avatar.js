import React from 'react'
import styled, { css } from 'styled-components'

const StyledAvatar = styled.img`
  border-radius: 50%;
  margin: 0 10px;
`

const StyledAvatarSm = styled(StyledAvatar)`
  width: 50px;
  height: 50px;
`

const StyledAvatarMd = styled(StyledAvatar)`
  width: 65px;
  height: 65px;
`

const StyledAvatarLg = styled(StyledAvatar)`
  width: 80px;
  height: 80px;
`

const Avatar = ({avatar, username, sm=false, md=false, lg=false}) => {
  let component

  if(sm)
    component = <StyledAvatarSm src={avatar} alt={username} />
  else if (md)
    component = <StyledAvatarMd src={avatar} alt={username} />
  else if (lg)
    component = <StyledAvatarLg src={avatar} alt={username} />

  return component
}

export default Avatar