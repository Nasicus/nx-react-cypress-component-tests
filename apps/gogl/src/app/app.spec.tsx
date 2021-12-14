import * as React from 'react'
import { mount } from '@cypress/react'
import App from './App'
// using the following import will break the build
//import styled from 'styled-components/macro'
// with this import it works
import styled from 'styled-components'

it('Button', () => {
  mount(<Container><App /></Container>)
cy.get(".text-container > a").click()
cy.contains("up and running")
})

const Container = styled.div`
`