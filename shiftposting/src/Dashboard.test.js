import React from 'react'
import Dashboard from './Dashboard'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

test('renders home scene', () => {
    render(<Dashboard />)
    const scene = screen.getByTestId('home-scene')
    expect(scene).toBeInTheDocument()
})
