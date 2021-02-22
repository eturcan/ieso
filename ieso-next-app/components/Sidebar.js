import styled from 'styled-components'
import { useState, useEffect } from "react"
import HomeButton from './HomeButton'
import MenuItem from './MenuItem'
import Blurb from './Blurb'
import Account from './Account'

let Container = styled.div`
  height: 100vh;
  width: 30vw;
  padding: 10vmin;
  position: fixed;
  box-sizing: border-box;
  font-family: 'Work Sans';

  @media only screen and (max-width: 1000px) {
    position: relative;
    width: unset;
    height: unset;
    padding: 1rem;
  }
`

let Notification = styled.div`
  font-family: 'Work Sans';
  font-size: 0.8rem;
`

let MenuContainer = styled.div`
  margin: 1rem 0;
`

const isModerator = async (username) => {
  return await fetch('/api/isModerator', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  })
}

const getNotifications = async () => {
  let data = await fetch('/api/getNotifications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
  if (data.status === 200) {
    let { notifications } = await data.json()
    return notifications
  }
  return []
}

const dismissNotification = async id => {
  return await fetch('/api/dismissNotification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  })
}

export default function Sidebar() {
  const [moderator, setModerator] = useState(false)
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    let update = async () => {
      setModerator((await isModerator()).status === 200 ? true : false)
      setNotifications(await getNotifications())
    }
    update()
  }, [])

  return <Container>
    <HomeButton />
    <MenuContainer>
      <Account />
    </MenuContainer>
    <div>
      {
        notifications.map(({ _id, id, type, approved }) => {
          if (type === "post")
            return <Notification><div onClick={() => {
              dismissNotification(_id)
              window.location.reload()
            }
            }><div className={`fas fa-times`}/></div>Your post, {id}, has been {approved ? "approved" : "rejected"}</Notification>
          return <Notification><div onCzlick={() => {
            dismissNotification(_id)
            window.location.reload()
          }
          }><div className={`fas fa-times`}/></div>Your reply to {id}, has been {approved ? "approved" : "rejected"}</Notification>
        })
      }
    </div>
    <MenuContainer>
      <MenuItem href="/messages">
        messages
      </MenuItem>
      <MenuItem href="/about">
        about
      </MenuItem>
      <MenuItem href="/rules">
        site rules
      </MenuItem>
      <MenuItem href="/privacy">
        privacy
      </MenuItem>
      <MenuItem href="/terms">
        terms of service
      </MenuItem>
      <MenuItem href="/resources">
        mental health resources
      </MenuItem>
      {
        moderator && <MenuItem href="/review">
          review
        </MenuItem>
      }
    </MenuContainer>
    <Blurb />
  </Container>
}