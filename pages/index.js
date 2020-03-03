import React, { useEffect, useLayoutEffect, useState } from 'react'

import UserGrid from '../src/components/UserGrid'
import Pagination from '../src/components/Pagination'
import Portal from '../src/components/Portal'
import ProfileCard from '../src/components/ProfileCard'

import { useSelector, useDispatch, useStore } from 'react-redux'
import { getUsers, getUserProfile } from '../src/network/github'

import { addUsers } from '../src/modules/users'
import { setPage } from '../src/modules/page'
import { showModal, hideModal } from '../src/modules/modal'
import Overlay from '../src/components/Overlay'

import styled from 'styled-components'

const PageSelect = styled.div`
  width: fit-content; 
  margin: auto;
  `



const App = () => {
  const users = useSelector(state => state.users)
  const page = useSelector(state => state.page)
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()

  const displyNum = 20
  const pageCount = Math.ceil(users.length / displyNum)
  const currentPageUsers = users.slice((page - 1) * displyNum, page * displyNum)

  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    // init data with 100 users
    (async function () {
      const options = { per_page: 100 }
      let users = await getUsers({ since: 0, ...options })
      users = users.map(user => ({ id: user.id, username: user.login, headUrl: user.avatar_url, badge: user.site_admin }))
      dispatch(addUsers(users))
    })();
  }, [])


  const pageChangeHandler = (nextPage) => {
    dispatch(setPage(nextPage))
  }

  const onOverlayClick = () => {
    dispatch(hideModal())
  }

  const userClickHandler = (user) => {
    (async function () {
      let profile = await getUserProfile({ username: user.username })
      profile = { ...user, name: profile.name, location: profile.location, bio: profile.bio, blog: profile.blog }
      dispatch(showModal())
      setUserProfile(profile)
    })();
  }

  return (
    <>
      <UserGrid users={currentPageUsers} onUserClick={userClickHandler} />
      <PageSelect>
        <Pagination
          page={page} pageCount={pageCount} onPageChange={pageChangeHandler}
          css={`display: inline;`} />
        <div 
          css={`display: inline; padding:10px;`}>
          {`${users.length} loaded`}
        </div>
      </PageSelect>
      {modal.show
        ? <Portal selector='#modal'>
          <Overlay
            onClick={onOverlayClick}
            css={`display: flex; justify-content: center; align-items: center;`}>
            <ProfileCard
              onClick={e => { e.stopPropagation() }}
              profile={userProfile} />
          </Overlay>
        </Portal>
        : null
      }
    </>
  )
}


export default App
