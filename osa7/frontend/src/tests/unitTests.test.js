import React from 'react'
import { render, fireEvent } from '@testing-library/react'
//import { prettyDOM } from '@testing-library/dom'

import Blog from '../components/Blog'
import SimpleBlog from '../components/SimpleBlog'

describe('SimpleBlog test', () => {
  const testBlog = {
    title: 'titleX',
    author: 'authorX',
    likes: '666'
  }

  test('Render title, author and likes (5.13)', () => {
    const mockHandler = jest.fn()

    const component = render(
      <SimpleBlog blog={testBlog} onClick={mockHandler}/>
    )

    expect(component.container).toHaveTextContent('titleX authorX')
    expect(component.container).toHaveTextContent('blog has 666 likes')
  })

  test('Press like-button twice (5.14)', () => {
    const mockHandler = jest.fn()

    const { getByText } = render(
      <SimpleBlog blog={testBlog} onClick={mockHandler}/>
    )

    const button = getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})

describe('Blog test', () => {
  const testBlog = {
    id: '5dc9f43d40c7ed5748756489',
    title: 'titleX',
    author: 'authorX',
    url: 'x.com',
    likes: '666',
    user: {
      id: '5db8a9ba7a515248c21b94c9',
      username: 'testUser',
      name: 'testName'
    }
  }

  const testUser = {
    id: '5db8a9ba7a515248c21b94c9',
    username: 'testUser',
    name: 'testName'
  }

  test('Default view shows name and author (5.15)', () => {
    const mockAddLike = jest.fn()
    const mockDeleteBlog = jest.fn()

    const component = render(
      <Blog
        blog={testBlog} loggedUser={testUser}
        addLike={mockAddLike} deleteBlog={mockDeleteBlog}
      />
    )

    const divDefault = component.container.querySelector('.defaultView')
    const divExpanded = component.container.querySelector('.expandedView')

    expect(divDefault).toHaveStyle('')
    expect(divDefault).toHaveTextContent('titleX authorX')
    expect(divExpanded).toHaveStyle('display: none')
  })

  test('Expanded view shows name, author, url, likes and username (5.15)', () => {
    const mockAddLike = jest.fn()
    const mockDeleteBlog = jest.fn()

    const component = render(
      <Blog
        blog={testBlog} loggedUser={testUser}
        addLike={mockAddLike} deleteBlog={mockDeleteBlog}
      />
    )

    const divDefault = component.container.querySelector('.defaultView')
    const divExpanded = component.container.querySelector('.expandedView')
    fireEvent.click(divDefault)
    expect(divDefault).toHaveStyle('display: none')

    expect(divExpanded).toHaveStyle('')
    expect(divExpanded).toHaveTextContent('Title: titleX')
    expect(divExpanded).toHaveTextContent('Author: authorX')
    expect(divExpanded).toHaveTextContent('URL: x.com')
    expect(divExpanded).toHaveTextContent('Likes: 666')
    expect(divExpanded).toHaveTextContent('Added by User: testUser')
  })

})