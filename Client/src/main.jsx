import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PUBLISHABLE_KEY = 'pk_test_dG91Y2hlZC13YXNwLTY1LmNsZXJrLmFjY291bnRzLmRldiQ';
console.log("CLERK KEY IN MAIN:", PUBLISHABLE_KEY);


  if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
  }


createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>,
)

