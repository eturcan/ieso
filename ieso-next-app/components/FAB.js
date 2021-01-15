import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"

let Solar = styled.div`
  border-radius: 30rem;
  background-color: #81A4CD;
  color: white;
  padding: 1.2rem;
  display inline-block;
  font-family: 'Work Sans';
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1),
    0px 10px 30px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1),
    0px 10px 40px rgba(0, 0, 0, 0.25);
    filter: brightness(105%);
  }

  svg {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 1000px) {
    right: 2rem;
    bottom: 2rem;
  }
`

function FAB(props, ref) {
  let {icon, text, onClick} = props
  return <Solar onClick={onClick}><FontAwesomeIcon icon={['fas', icon]} />{text}</Solar>
}

const RefFAB = React.forwardRef(FAB)

export default RefFAB