import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'

jest.mock('../services/blogs')
import App from '../App'

describe('<App/>', () => {

  test('When NOT logged in, show only loginForm (5.16)', async () => {
    const component = render(<App/>)
    component.rerender(<App/>)

    await waitForElement(
      () => component.getByText('login')
    )

    expect(component.container).toHaveTextContent('Login to Application')
    expect(component.container).toHaveTextContent('username:')
    expect(component.container).toHaveTextContent('password:')

    const blogs = component.container.querySelectorAll('.blogView')
    expect(blogs.length).toBe(0)
  })

  test('When logged in, shows all blogs (5.17)', async () => {
    const user = {
      username: 'uName1',
      name: 'n1',
      token: '123123123'
    } 
    localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))

    const component = render(<App/>)  
    component.rerender(<App/>)

    await waitForElement(
      () => component.getByText('New Blog')
    )

    const blogs = component.container.querySelectorAll('.blogView')
    expect(blogs.length).toBe(4)

    const blogsDefault = component.container.querySelectorAll('.defaultView')
    expect(blogsDefault[0]).toHaveTextContent('blogAAA authorAAA')
    expect(blogsDefault[1]).toHaveTextContent('blogBBB authorBBB')
    expect(blogsDefault[2]).toHaveTextContent('blogCCC authorCCC')
    expect(blogsDefault[3]).toHaveTextContent('blogDDD authorDDD')
  })
})