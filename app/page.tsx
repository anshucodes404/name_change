"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

type name = "anshu" | "apurba" | "rashika";


export default function Home() {
  const [name, setName] = useState<name>("apurba");
  useEffect(() => {
    alert(`name changed to ${name}`);
  }, [name])
  

  const changeColor = (name: name) => {
    switch(name){
      case "anshu":
        return "text-red-600";
      case "apurba":
        return "text-green-600";
      case "rashika":
        return "text-indigo-600"
    }
  }

  const changeName = () => {
    switch(name){
      case "anshu":
        setName("apurba");
        break;
      case "apurba":
        setName("rashika");
        break;
      case "rashika":
        setName("anshu");
        break;
    }
  }

  return (
   <div className="flex items-center justify-center h-screen">
      <button onClick={() => changeName()} className={`text-md  border border-gray-200 bg-gray-100/70 font-bold px-4 py-2 rounded-lg ${changeColor(name)} `}>
        {name}
      </button>
  </div>

  );
}
