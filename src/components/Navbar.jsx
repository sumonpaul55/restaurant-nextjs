import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

function Navbar() {
    return (
        <section className='border-b-2 border-b-orange-500 py-2'>
            <div className="container mx-auto">
                <div className='flex items-center justify-between px-3 md:px-0'>
                    <div className='hidden md:flex gap-4 flex-1'>
                        <Link href="/">Home</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    {/* logo */}
                    <div className='bg-white flex-1 text-center'>
                        <Link href="/" className='font-bold text-xl uppercase cursor-pointer'>BiteBliss</Link>
                    </div>
                    {/* right menu */}
                    <div className='hidden md:flex gap-4 flex-1'>
                        <div className='flex items-center cursor-pointer bg-orange-400 md:absolute top-2 right-3 xl:static text-white px-1 rounded-lg '>
                            <Image src="/phone.png" width={20} height={20} alt="Phone" />
                            <span>+8412116545</span>
                        </div>
                        <Link href="/login">login</Link>
                        <Link href="/order">Orders</Link>
                        <CartIcon />
                    </div>
                    {/* mobile menu */}
                    <div className='md:hidden'>
                        <Menu></Menu>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar