import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 50%;
  padding: 20px;
  border-radius: 5px;
  `


const Head = styled.img`
  border-radius: 50%;
  height: 80px;
  `

const Text = styled.div`
  display: inline-block;
  padding-left: 30px;
`

const ProfileCard = ({ profile, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Head src={profile.headUrl} />
      <Text>
        <div>{`login: ${profile.username}`}</div>
        <div>{`name: ${profile.name}`}</div>
        <div>{`location: ${profile.location}`}</div>
        <div>{`site_admin: ${profile.badge}`}</div>
        <div>{`bio: ${profile.bio}`}</div>
        <div>{`blog: ${profile.blog}`}</div>
      </Text>
    </Wrapper>
  )
}


export default ProfileCard