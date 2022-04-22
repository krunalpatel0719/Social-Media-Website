import React from 'react';

import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import {waitFor,  fireEvent, render, screen } from "@testing-library/react";



import AccountInfo from '../components/AccountInfo'

// Our test is if the sign up form exists and if the input they type for 

describe('AccountInfo', () => {
  it('Renders Account Info component', () => {
    render(<AccountInfo />)

    const form = screen.getByRole('account-form')

   
    expect(form).toBeInTheDocument();
  })
  it('Account Info valid age number check', async () => {
    const user = userEvent.setup()

    render(<AccountInfo/>)
    
    const age_input = screen.getByRole('age-input')
   
    fireEvent.change(age_input, { target: { value:24} });
    

    
    await waitFor(() =>  expect(age_input).toHaveValue(24)); 
   
   
  })
})

