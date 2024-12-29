"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomeComponent = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-black to-slate-800">
      <div className="flex flex-col items-center gap-5 ">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/Wallet.webp"
            alt="logo"
            width={180}
            height={180}
            className="cursor-pointer"
          />
          <div className="font-mono cursor-pointer text-4xl text-white font-semibold">
            Welcome To ChainGuard
          </div>
          <p className="font-mono text-slate-400 font-bold">
            Empowering Your Digital Assets with Unbreakable Security.
          </p>
        </div>
        <Button onClick={() => router.push("/terms")} variant="outline">
          Create your Wallet 👜
        </Button>
      </div>
    </div>
  );
};

export default HomeComponent;
