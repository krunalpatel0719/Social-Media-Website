import React from 'react';

import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import {waitFor,  fireEvent, render, screen } from "@testing-library/react";



import Login from '../components/Login'

// Our test is if the sign up form exists and if the input they type for 

describe('Login', () => {
  it('Renders a signup component', () => {
    render(<Login />)

    const form = screen.getByRole('login-form')

   
    expect(form).toBeInTheDocument();
  })
  it('Empty login input check', async () => {
    const user = userEvent.setup()
   
    render(<Login />)
    
    
    const login = screen.getByRole("login-submit");
    const error = await screen.findByTestId("error-message");
    //fireEvent.change(email, { target: { value: 'testgmail.com'} });
    
    fireEvent.click(login);
    
    
    await waitFor(() =>  expect(error).toHaveTextContent("Invalid email please include an @")); 
    
   
  })
})

