import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <section className='py-20 bg-slate-800 text-white text-xl'>
            <div className="container mx-auto">
                <div className='flex items-center justify-between'>
                    <Link href="/" className='font-bold text-xl md:text-3xl'>BITEBLISS</Link>
                    <p>&copy; 2024 allright reserved || BITEBLISS</p>
                </div>
            </div>
        </section>
    )
}

export default Footer