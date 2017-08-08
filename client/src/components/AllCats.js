import React, { Component } from 'react';
import { Container, Header, Image, Link, Divider } from 'semantic-ui-react'

class AllCats extends Component {


  render() {

    return (

      <Image.Group as='section' fluid widths={this.props.cats.length}>
      {
        this.props.cats.map((cat) => {

        return <Image
                  key={cat.id}
                  src={cat.image_url}
                  as='a'
                  href='http://google.com'
                  target='_blank'
                />
      })
    }
      </Image.Group>
    )
  }
}

export default AllCats;
