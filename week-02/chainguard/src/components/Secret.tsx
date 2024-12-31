"use client";

import { generateMnemonic } from "bip39";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { EachWord } from "./EachWord";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Secret = () => {
  const [mnemonic, setMnemonic] = useState<string>("");
  const [copy, setCopy] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleCheckBox = ()=>{
    setIsChecked((prev) => !prev);
  }

  useEffect(() => {
    setMnemonic(generateMnemonic());
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-black to-slate-800">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-slate-200 text-6xl font-bold">
            Secret Recovery Phase
          </h1>
          <p className="text-slate-400 text-lg font-semibold">
            Save these words in a safe place, and do not share with anyone!!{" "}
          </p>
        </div>
        <div className="">
          <Link
            className="text-blue-400 font-medium hover:text-blue-500 text-base"
            href={"/terms"}
          >
            Read the warning again
          </Link>
        </div>
        <div
          className=" bg-black mt-6 p-4 rounded flex flex-col items-center justify-center gap-5 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(mnemonic);
            setCopy(true);
          }}
        >
          <div className="grid grid-cols-3 gap-4 max-w-md lg:max-w-2xl lg:grid-cols-4">
            {mnemonic.split(" ").map((word, index) => (
              <EachWord key={index} word={word} />
            ))}
          </div>
          <p className="text-white items-center font-semibold">
            {copy ? "Copied to clipboard" : "Click Here to Copy the Phase"}
          </p>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <Checkbox className=" border-2 border-slate-400 bg-slate-500" checked={isChecked} onCheckedChange={handleCheckBox}/>
            <span className="text-white ">I have saved my recovery phrase</span>
          </label>
        </div>
        <div>
          <Button variant="outline"
            className="w-40 text-black text-base" 
            disabled={!isChecked}
            onClick={()=>router.push("/wallet")}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Secret;
