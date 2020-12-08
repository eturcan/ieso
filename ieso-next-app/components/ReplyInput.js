import styled from 'styled-components'
import {useState} from "react"
import Link from 'next/link'

let Container = styled.div`
  font-family: 'Spectral';
  box-sizing: border-box;
  background-color: white;
  margin: 2rem 0;
  margin-left: 2rem;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.03);
  line-height: 2rem;
  // display: block;

  & textarea {
    width: 100%;
    padding: 1rem;
    margin: 0;
    border: 0;
    height: 5rem;
    box-sizing: border-box;
    
    &:focus {
      outline: none;
    }
  }

  div {
    margin-bottom: 1rem;
  }
`

let Align = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 1rem 1rem;

  & div {
    margin-bottom: 0;
  }
`

let Status = styled.div`
  margin-right: 1rem;
`

let Submit = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

// let StyledAttribute = styled.div`
//   display: inline;

//   :not(:last-child) {
//     margin-right: 1rem;
//   }
// `

// let Badge = styled.div`
//   display: inline;
//   border-radius: 10px;
//   background: black;
//   color: white;
//   font-family: 'Work Sans';
//   padding: 0 0.5rem;
//   margin: 0 0.5rem;
// `

// let Align = styled.div`
//   display: flex;
//   justify-content: space-between;
//   && {
//     margin-bottom: 0;
//   }
// `

// const Attribute = ({emotion, rank}) => <StyledAttribute>
//   {emotion}
//   <Badge>
//     {rank}
//   </Badge>
// </StyledAttribute>

const reply = async (pid, text) => {
  return await fetch('/api/reply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({pid, text})
  })
}

const ReplyInput = ({pid}) => {
  const [text, updateText] = useState("")
  const [status, updateStatus] = useState("")

  const handleSubmit = async (pid, text) => {
    let result = await reply(pid, text)
    updateStatus(result.status === 200 ? "Thank you for replying, your message will be reviewed" : "Please log in before replying")
  }
 
  return <Container>
    <textarea onChange={e => updateText(e.target.value)} value={text} placeholder="What would you like to say?"/>
    <Align>
      <Status>{status}</Status>
      <Submit onClick={() => handleSubmit(pid, text)}>submit</Submit>
    </Align>
  </Container>
}

export default ReplyInput