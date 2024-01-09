import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='flex items-center justify-between px-3 md:px-0 border-b-2 border-b-orange-500 py-2'>
            <div className='hidden md:flex gap-4'>
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/contact">Contact</Link>
            </div>
            {/* logo */}
            <div className='bg-white'>
                <Link href="/" className='font-bold text-xl uppercase cursor-pointer'>BiteBliss</Link>
            </div>
            {/* mobile menu */}
            <div className='md:hidden'>
                <Menu></Menu>
            </div>
        </div>
    )
}

export default Navbar