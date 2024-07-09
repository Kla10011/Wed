import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <ul>
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/about'}>About</Link></li>
      <li><Link href={'/services'}>Services</Link></li>
      <li><Link href={'/contact'}>Contact</Link></li>
    </ul>
  )
}

export default Nav
