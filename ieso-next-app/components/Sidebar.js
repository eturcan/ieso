import styled from 'styled-components'
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
`

let MenuContainer = styled.div`
  margin: 1rem 0;
`

export default function Sidebar() {
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
    </MenuContainer>
    <Blurb/>
  </Container>
}