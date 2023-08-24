import { Form } from '@/src/components/form';
import { signIn } from 'next-auth/react';
import React from 'react'

export default function SignIn () {

  
    const onSubmit = (email, password) => {
      signIn('credentials', {redirect: false, email, password})

    };

  return <div className="flex justify-center items-center">
    <Form signIn={true} onFormSubmit={onSubmit}/>
    </div>


}