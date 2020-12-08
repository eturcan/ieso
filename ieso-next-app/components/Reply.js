import styled from 'styled-components'
import Link from 'next/link'

let Container = styled.div`
  font-family: 'Spectral';
  padding: 1rem;
  box-sizing: border-box;
  background-color: white;
  margin: 2rem 0;
  margin-left: 2rem;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.03);
  line-height: 2rem;
  cursor: pointer;

  div {
    margin-bottom: 1rem;
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

const Reply = ({text}) => <Container>
  <div>
    {text}
  </div>
</Container>

export default Reply