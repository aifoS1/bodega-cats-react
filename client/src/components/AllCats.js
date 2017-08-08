import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container, Header, Image, Link, Divider } from 'semantic-ui-react'

class AllCats extends Component {
  constructor() {
    super()
    this.state = {}
    this.getCats = this.getCats.bind(this)
    this.cats = [
      {
        id: 1,
        name: 'Lucy',
        image_url: 'http://via.placeholder.com/300x250',
        lat: 73.9903,
        long: 40.6733
      },
      {
        id: 2,
        name: 'Frank',
        image_url: 'http://via.placeholder.com/300x250',
        lat: 78.9903,
        long: 43.6733
      },
      {
        id: 3,
        name: 'Sally',
        image_url: 'http://via.placeholder.com/300x250',
        lat: 72.9903,
        long: 38.6733
      }
    ]
  }

  componentDidMount() {
    this.getCats()
  }

  getCats() {
    this.setState({cats: this.cats})
    console.log("I'm getting cats")
  }

  render() {

    return (

      <Image.Group>
      {
        this.cats.map((cat) => {

        return <Image widths={cat.length}
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
