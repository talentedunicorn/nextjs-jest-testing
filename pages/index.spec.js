import { shallow, mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import Router from 'next/router'

import Page from './index.js'

Page.getInitialProps = () => ({ stars: '34' })

Router.router = () => {}

describe('Index page', () => {
  it('should match snapshot', () => {
    const wrapper = renderer.create(<Page/>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
