import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <Link href="/"><Image height={80} width={70} src='/images/logo.png' alt='logo' /></Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>Users</a></Link>

        </nav>
    )
}

export default Navbar