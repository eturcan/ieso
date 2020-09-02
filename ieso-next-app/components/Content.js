import styled from 'styled-components'

let Container = styled.div`
  margin-left: 30vw;
  padding: 1rem;
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