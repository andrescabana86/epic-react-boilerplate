import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { App } from '@components/app/app'

describe('<App />', () => {
  afterEach(cleanup)

  it('should render app component', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})
