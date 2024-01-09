"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'
function Menu() {

    const [open, setOpen] = useState(false)
    const user = false
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/"
        },
        {
            id: 1,
            title: "menu",
            url: "/menu"
        },
        {
            id: 1,
            title: "Working Hours",
            url: "/"
        },
        {
            id: 1,
            title: "Contact",
            url: "/contact"
        }
    ]
    return (
        <div className=''>
            <div>
                {
                    open ? <Image src="/open.png" alt="humberger" width={20} height={20} onClick={() => setOpen(!open)} /> :
                        <Image src="/close.png" alt="humberger" width={20} height={20} onClick={() => setOpen(!open)} />
                }
            </div>
            <div className='bg-orange-600 text-center text-white left-0 absolute top-[86px] justify-center text-xl flex flex-col w-full gap-4 py-4 min-h-[calc(100vh-86px)] z-10'>
                {
                    links?.map((link, idx) => (
                        <Link key={idx} href={link.url} onClick={() => setOpen(!open)}>{link?.title}</Link>
                    ))
                }
                {
                    !user ? <Link href="/login" onClick={() => setOpen(!open)}>Login</Link> :
                        <Link href="/orders" onClick={() => setOpen(!open)}>Orders</Link>
                }

                <Link href="/cart" onClick={() => setOpen(!open)} >
                    <CartIcon />
                </Link>
            </div>
        </div>

    )
}

export default Menu