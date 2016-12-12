import React from 'react'
import Link from 'next/link'

export default () =>
  <div>
    <h1>Hello World</h1>
    <ul>
      <li><Link href='/list'><a>List Component</a></Link></li>
    </ul>
  </div>
