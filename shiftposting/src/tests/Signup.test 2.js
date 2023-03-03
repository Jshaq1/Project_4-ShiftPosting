import React from 'react'
import Signup from '../UserAuth/Signup'
import { auth } from '../firebase'
import { Auth } from 'firebase/auth'
import {render, fireEvent, waitFor, screen, getByTestId, getByLabelText } from '@testing-library/react'

  

test('renders login form', () => {
    render(<Signup/>)
    const form = screen.getByTestId('loginForm')
    expect(form).toBeInTheDocument()
})


test('should render a button with correct label', () => {
    const label = 'Sign In'
    const { findAllByRole } = render(<Signup/>)
    const buttons = screen.findAllByRole('button', {name:label})
    expect(buttons)
})

test('button should alter the class of login container, show right panel (signup form)', () => {
    const {getByTestId} = render(<Signup/>)
    const switchViewButton = screen.getByTestId('Sign-Up')
    const container = screen.getByTestId('container')
    fireEvent.click(switchViewButton)

    expect(container).toHaveClass('right-panel-active')
    
})


test('log in forms calls handle sign in function', () =>{
    const mockSubmitHandler = jest.fn().mockResolvedValue(true)
    const email = 'testuser@gmail.com'
    const password = 'password123'
    const {getByTestId} = render(<Signup triggerSignUp={mockSubmitHandler} triggerSignIn={mockSubmitHandler}></Signup>)

    const emailInput = getByTestId('email')
    const passwordInput = getByTestId('password')
    const submitButton = getByTestId('Sign In')

    const errors = getByTestId('errors')

    fireEvent.change(emailInput, {target: {value: email}} )
    fireEvent.change(passwordInput, {target: {value: password} })
    fireEvent.click(submitButton)

    expect(errors.innerHTML).toBe('Logging in...')

  });



test('sign up in forms rejects missmatching passwords', () =>{
    const mockSubmitHandler = jest.fn()
    const email = 'testuser@gmail.com'
    const password = 'password123'
    const confirmPass= 'password12'
    const displayName= 'password12'
    const {getByLabelText, getByTestId} = render(<Signup triggerSignUp={mockSubmitHandler} triggerSignIn={mockSubmitHandler}></Signup>)

    const emailInput = getByTestId('SignUp-email')
    const passwordInput = getByTestId('SignUp-password')
    const nameInput = getByTestId('SignUp-name')
    const confirmInput = getByTestId('SignUp-confirm')
    const submitButton = getByTestId('Sign Up')

    const errors = getByTestId('errors')
    expect(errors.innerHTML).toBe('')
    fireEvent.change(emailInput, {target: {value: email}} )
    fireEvent.change(passwordInput, {target: {value: password} })
    fireEvent.change(confirmInput, {target: {value: confirmPass} })
    fireEvent.change(nameInput, {target: {value: displayName} })
    fireEvent.click(submitButton)

    expect(errors.innerHTML).toBe('Passwords do not match')

  });

  test('signin triggers user auth', () =>{
    const mockSubmitHandler = jest.fn().mockResolvedValue(true)
    const email = 'testuser@gmail.com'
    const password = 'password123'
    const confirmPass = 'password123'
    const displayName= 'testinghuman'

    const {getByTestId} = render(<Signup triggerSignup={mockSubmitHandler}></Signup>)

    const emailInput = getByTestId('SignUp-email')
    const passwordInput = getByTestId('SignUp-password')
    const nameInput = getByTestId('SignUp-name')
    const confirmInput = getByTestId('SignUp-confirm')
    const submitButton = getByTestId('Sign Up')

    const errors = getByTestId('errors')
    expect(errors.innerHTML).toBe('')

    fireEvent.change(emailInput, {target: {value: email}} )
    fireEvent.change(passwordInput, {target: {value: password} })
    fireEvent.change(confirmInput, {target: {value: confirmPass} })
    fireEvent.change(nameInput, {target: {value: displayName} })
    fireEvent.click(submitButton)

    expect(mockSubmitHandler).toHaveBeenCalledTimes(1)
    // expect(mockSubmitHandler).toHaveBeenCalledWith(expect.objectContaining({email, password, displayName}))
        

  });




