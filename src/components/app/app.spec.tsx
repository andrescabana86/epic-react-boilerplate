import * as React from 'react'
import { render } from '@testing-library/react'
import { App } from '@components/app/app'

describe('<App />', () => {
  it('should render app component', () => {
    render(<App />)
  })
})
