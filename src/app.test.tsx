import App from './App'
import { render, screen } from '@testing-library/react'

test('renders App component', () => {
  render(<App />)
  const headingElement = screen.getByText(/Hello App component/i)
  expect(headingElement).toBeTruthy()
})
