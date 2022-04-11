import React from 'react';

import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import {waitFor,  fireEvent, render, screen } from "@testing-library/react";



import Post from '../components/Post'

// Our test is if the sign up form exists and if the input they type for 

describe('Post', () => {
  
  it('Renders a Post component', () => {
    render(<Post/>)
    const post = screen.getByRole('post')
    expect(post).toBeInTheDocument();
  })
  it('Check Posts like button', async () => {
    const user = userEvent.setup()
    render(<Post />)
   
    const button = screen.getByRole('like-button')
    const thumbs = screen.getByTestId('thumbs-icon')
    //fireEvent.change(email, { target: { value: 'testgmail.com'} });
    
    user.click(button);
    
    await waitFor(() => {
        
          expect(thumbs).toHaveClass(`text-blue-400`)
        })
 

  
    //expect(error).toHaveTextContent("Invalid email please include an @");
    // await waitFor(() => {
        
    //     expect(screen.getByText("Username can't be empty")).toBeInTheDocument()
    //   })
    
    
    //await waitFor(() =>  expect(error).toHaveTextContent("Username can't be empty")); 
    
   
  })
})

