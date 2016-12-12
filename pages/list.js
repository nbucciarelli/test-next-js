import React from 'react'
import Link from 'next/link'

export default () =>
  <div>
    <header>
      <h1>List Component</h1>
    </header>
    <main>
      <ul>
        <li>TODO one</li>
      </ul>
      <Link href='/'><a>Back</a></Link>
    </main>
  </div>
