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

  @media only screen and (max-width: 1000px) {
    position: relative;
    width: unset;
    height: unset;
    padding: 1rem;
  }
`

let MenuContainer = styled.div`
  margin: 1rem 0;
`

const isModerator = async (username) => {
  return await fetch('/api/isModerator', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username})
  })
}

export default function Sidebar() {
  const [ moderator, setModerator ] = useState(false)
  useEffect(() => {
    let checkModerator = async () => setModerator((await isModerator()).status === 200 ? true : false)
    checkModerator()
  })

  return <Container>
    <HomeButton/>
    <MenuContainer>
      <Account/>
    </MenuContainer>
    <MenuContainer>
      <MenuItem href="/about">
        about
      </MenuItem>
      <MenuItem href="/rules">
        site rules
      </MenuItem>
      <MenuItem href="/terms">
        terms of service
      </MenuItem>
      <MenuItem href="/privacy">
        privacy
      </MenuItem>
      {
        moderator && <MenuItem href="/review">
          review
        </MenuItem>
      }
    </MenuContainer>
    <Blurb/>
  </Container>
}