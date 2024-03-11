import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />)
    const heading = screen.getByText(/Hello world! I am using React/i)
    expect(heading).toBeInTheDocument()
  })
})
