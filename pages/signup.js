import { Form } from '@/src/components/navbar'
import Link from 'next/link'
import React from 'react'

const Signup = (Form) => {
  return (
    <div>
        <Link href={"/components/signup"}>
        <Form/>
        </Link>
    </div>
  )
}

export default Signup