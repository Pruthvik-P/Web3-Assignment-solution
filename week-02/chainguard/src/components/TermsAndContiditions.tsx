"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen text-white fixed bg-gradient-to-bl from-black to-slate-800">
      <div className="flex flex-col items-center justify-center gap-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl font-semibold text-slate-300">
            Secret Recovery Phrase Warning
          </h1>
          <p className="font-medium text-lg text-slate-400">
            In the next page, you will receive your secret recovery phrase
          </p>
        </div>

        {/* Warning Messages */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5 bg-gray-500 w-96 p-4 rounded">
            <Image
              src="/warning.webp"
              alt="warning"
              width={60}
              height={60}
              className="flex-shrink-0"
            />
            <p className="text-base">
              This is the ONLY way to recover your account if you lose access
              to your device.
            </p>
          </div>
          <div className="flex items-center gap-5 bg-gray-500 w-96 p-4 rounded">
            <Image
              src="/lock.png"
              alt="lock"
              width={60}
              height={60}
              className="flex-shrink-0"
            />
            <p className="text-base">
              Write it down, store it in a safe place, and NEVER share it with
              anyone.
            </p>
          </div>
        </div>

        {/* Checkbox and Label */}
        <div className="flex items-center gap-3 w-96">
          <Checkbox
            id="term"
            className={`bg-white border-2 border-slate-800 rounded ${
              isChecked ? "bg-blue-500 border-blue-700" : ""
            }`}
            checked={isChecked}
            onCheckedChange={handleCheckboxChange}
          />
          <label
            htmlFor="term"
            className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I understand that I am responsible for saving my secret recovery
            phrase, and that it is the only way to recover my wallet.
          </label>
        </div>

        {/* Next Button */}
        <div>
          <Button
            variant="outline"
            className="w-40 text-black text-base"
            disabled={!isChecked} onClick={()=> router.push("/secret")}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
