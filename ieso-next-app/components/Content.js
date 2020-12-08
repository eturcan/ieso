import styled from 'styled-components'

let Container = styled.div`
  margin-left: 30vw;
  padding: 1rem;

  @media only screen and (max-width: 1000px) {
    && {
      margin-left: unset;
    }
    width: unset;
  }
`

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Container>
      {this.props.children}
    </Container>
  }
}

export default Content