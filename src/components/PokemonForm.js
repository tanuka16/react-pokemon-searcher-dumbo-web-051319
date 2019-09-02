import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }


  handleSubmit=(event)=>{
    // debugger
      event.preventDefault()
      this.props.newPokeSubmit(this.state)

  }

  handleOnChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal" >
            <Form.input value={this.state.name} onChange={this.handleOnChange} fluid type="Name" placeholder="Name" name="name" />
            <Form.input value={this.state.hp} onChange={this.handleOnChange} fluid type="hp" placeholder="hp" name="hp" />
            <Form.input value={this.state.frontUrls} onChange={this.handleOnChange} fluid type="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.input value={this.state.backUrl} onChange={this.handleOnChange} fluid type="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
