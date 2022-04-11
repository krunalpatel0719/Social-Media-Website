import React from 'react';

import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/dom'
import userEvent from '@testing-library/user-event'



import Header from '../components/Header'

import singletonRouter, { useRouter } from 'next/router';
import NextLink from 'next/link';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { renderHook, act } from '@testing-library/react-hooks/dom'

// This is all you need:
jest.mock('next/dist/client/router', () => require('next-router-mock'));


  



// Our test is if the sign up form exists and if the input they type for 

describe('Header', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/MainPage");
  });

  
  it('Renders a Header component', () => {
    render(<Header />)

    const header = screen.getByRole('header')

   
    expect(header).toBeInTheDocument();
  })
  it('Checks settings button link', async () => {
    const { result } = renderHook(() => useRouter());
    render(<Header />)
    
    const button = screen.getByTestId('settings-button');
     
    fireEvent.click(button);

    
   
    await waitFor(() => {
      result.current.push("/SettingsPage");
    })
    await waitFor(() => {
    expect(result.current).toMatchObject({ asPath: "/SettingsPage"})
  });
  })
  
 

  
})

