import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CartIcon() {
    return (
        <Link href="/cart" className='flex items-center gap-3 justify-center'>
            <div className='relative h-8 w-8'>
                <Image src="/cart.png" alt="cart" fill />
            </div>
            <span>Cart (3)</span>
        </Link>
    )
}

export default CartIcon