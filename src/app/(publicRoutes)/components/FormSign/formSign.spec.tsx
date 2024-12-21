import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { FormSign } from '.'

describe('FormSign', () => {
  it('should render form', () => {
    render(<FormSign />)
  })
})
