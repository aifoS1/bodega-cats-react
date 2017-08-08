import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container, Header, Segment, Button, Icon, Input, Loader, Divider } from 'semantic-ui-react'

const CatInput = () => {

    return (
      <Container className='section-content'>
        <Header as='h3'>Upload Bodega Cat</Header>
        <Input type='file' icon='upload' placeholder='upload bodeage cat'></Input>
        <Button primary>Submit Image</Button>
      </Container>
    )

};

export default CatInput;
