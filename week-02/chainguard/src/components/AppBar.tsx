"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const AppBar = () => {
  const router = useRouter();
  return (
    <div className='w-full flex text-white bg-gradient-to-br from-black to-slate-800'>
      <div className='flex gap-4 p-5 justify-center items-center ' onClick={() => router.push('/')}>
        <Image src="/Wallet.webp" alt="logo" width={80} height={80} className='cursor-pointer'  />
        <div className='font-mono cursor-pointer text-lg text-slate-400
        '>ChainGuard</div>
      </div>
    </div>
  )
}

export default AppBar