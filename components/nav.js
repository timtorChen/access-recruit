import React from 'react'
import Link from '../components/Link'


const Nav = () => (
  <div>
    <Link href='/'>
      <a>home</a>
    </Link>
    <Link href='/blog'>
      <a>blog</a>
    </Link>

  </div>
)

export default Nav
