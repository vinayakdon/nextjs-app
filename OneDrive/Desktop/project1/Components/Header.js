import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <nav className='lg:flex lg:justify-between lg:items-center lg:px-5 lg:py-4 bg-red-800 w-full  px-2 py-3 '>
        <h1 className='text-4xl'><Link href="/">Logo</Link></h1>
        <ul className='lg:flex lg:gap-4 hidden'>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Gallery">Gallery</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
            <li><Link href="/Map">Map</Link></li>
            <li><Link href="/DisplayUsers">DisplayUsers</Link></li>
        </ul>
    </nav>
  )
}

export default Header
