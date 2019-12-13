import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const TopBanner = () => {
  return (
    <Segment inverted>
      <Header as='h1' inverted color='blue'>
        Blogs
      </Header>
    </Segment>
  )
}

export default TopBanner