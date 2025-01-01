"use client";
import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation'

const Network = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center h-screen  bg-gradient-to-br from-black to-slate-800'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <Image src="/Wallet.webp" alt="logo" width={200} height={200} />
          <h1 className='text-3xl font-sans text-slate-50 font-semibold'>ChainGuard</h1>
        </div>
        <div className=''>
          <p className='text-slate-500 text-lg font-sans font-medium'>Choose Your Network</p>
        </div>
        <div className='flex gap-5'>
          <button className='bg-slate-700 text-white font-sans font-medium px-5 py-2 rounded-lg flex gap-2 hover:bg-slate-800' onClick={()=>{
            router.push("/ethWallet")
          }}> <Image src="/ethereum.webp" alt="Ethereum" width={25} height={25}/>Ethereum</button>
          <button className='bg-slate-700 text-white font-sans font-medium px-5 py-2 rounded-lg flex gap-2 hover:bg-slate-800' onClick={()=>
            router.push('/solWallet')
          }> <Image src="/Solana.png" alt="Solana" width={25} height={25}/>Solana</button>

        </div>
      </div>
    </div>
  )
}

export default Network