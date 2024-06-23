'use client'

import { ReactElement, useEffect } from 'react';

const Contact = (): ReactElement => {
  useEffect(() => {
    setTimeout(() => {
      console.log('Ciao');
    }, 3000);
  }, [])
  return <h1>Contact Page</h1>
}

export default Contact;
