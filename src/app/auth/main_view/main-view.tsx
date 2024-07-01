"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function MainView() {
    const imageUrl = "/assets/candado.png"
    const [activeButton,setActiveButton] = useState("register")

    return (
            <div className="w-full h-80 flex justify-center items-center font-mono text-sm lg:flex">
                <div className="px-4 py-4 flex h-svh flex-col items-center justify-between bg-[#EAD1D1]">
                    <div className="flex flex-col w-96 px-4 py-4 bg-[#33273A] rounded-lg mt-2">
                        <div className="w-auto flex justify-start items-center">
                            <Image src={imageUrl} width={150} height={150} alt={"login-icon"}/>
                            <h2 className="text-[10rem]">PM</h2>
                        </div>
                        <div className="flex px-4 py-4">
                            <p>Password Manager</p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col text-black justify-center items-center">
                        <h3 className="text-[#33273A] text-2xl">WELCOME BACK!</h3>
                        <br/>
                        <br/>
                        <p className="text-center font-bold">
                            Let me guess... <br/>
                            Did you forget your password again?
                        </p>
                    </div>
                    <div className="flex w-4/5 h-20 justify-between items-center px-2 py-2 bg-[rgba(0,0,0,0.2)] rounded-lg">
                        <Link href="./register"
                            className={`py-4 px-8 rounded-lg transition-colors ${activeButton === "register" ? "bg-[#33273A] text-white" : "bg-transparent text-gray-300"}`}
                            onClick={() => {
                                setActiveButton("register")
                            }}
                        >
                            Register
                        </Link>
                        <Link href="./login"
                            className={`py-4 px-8 rounded-lg transition-colors ${activeButton === "login" ? "bg-[#33273A] text-white" : "bg-transparent text-gray-300"}`}
                            onClick={() => {
                                setActiveButton("login")
                            }}
                            
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
    );
}
