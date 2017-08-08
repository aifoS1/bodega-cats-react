import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container, Header, Segment, Button, Icon, Input, Loader, Divider } from 'semantic-ui-react'

class NewCat extends Component {
  constructor(props) {
    super(props)
  }
  handleClick() {
    let image = this.ref.image.value;
    console.log("click")
  }
  render() {
    return (
      <Container className='section-content'>
      <Header as='h3'>Upload Bodega Cat</Header>
      <Input type='text' placeholder={'bodega cat\'s name'}></Input>
      <Input type='file' icon='upload' ref='image' placeholder='upload bodeage cat'></Input>
      <Button primary onClick={this.handleClick}>Submit Cat!</Button>
      </Container>
    )
  }

};

export default NewCat;
