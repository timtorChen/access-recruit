import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  justify-content: space-evenly;
  padding: 20px;
  `

const User = styled.div`
  margin: auto;
  `

const Head = styled.img`
  cursor: pointer;
  border-radius: 50%;
  height: 80px;
  `

const Foot = styled.div`
  width: fit-content;
  margin: auto;
  `



const UserGrid = ({ users = [], onUserClick }) => {
  return (
    <Wrapper>
      {users.map((user, index) => (
        <User key={index} onClick={() => { onUserClick(user) }}>
          <Head src={user.headUrl} />
          <Foot>
            <span>{user.username}</span>
            {user.badge? <span>👑️</span> : null}
          </Foot>
        </User>
      ))}
    </Wrapper>
  )
}



export default UserGrid