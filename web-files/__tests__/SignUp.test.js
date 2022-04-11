import React from 'react';

import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import {waitFor,  fireEvent, render, screen } from "@testing-library/react";



import SignUp from '../components/SignUp'

// Our test is if the sign up form exists and if the input they type for 

describe('Signup', () => {
  it('Renders a signup component', () => {
    render(<SignUp />)

    const form = screen.getByRole('signup-form')

   
    expect(form).toBeInTheDocument();
  })
  it('Empty signup input check', async () => {
    const user = userEvent.setup()

    render(<SignUp />)
    
    const email = screen.getByRole('email-input')
    const signup = screen.getByTestId("signup-submit");
    const error = screen.getByTestId("error-message");
    //fireEvent.change(email, { target: { value: 'testgmail.com'} });
    
    user.click(signup);
    //expect(error).toHaveTextContent("Invalid email please include an @");
    // await waitFor(() => {
        
    //     expect(screen.getByText("Username can't be empty")).toBeInTheDocument()
    //   })
    
    
    await waitFor(() =>  expect(error).toHaveTextContent("Username can't be empty")); 
    
   
  })
})

