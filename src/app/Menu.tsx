'use client'

import Link from "next/link";
import { useState } from "react";


export default function Menu() {
    const [nav,setNav] = useState<boolean>(false)
    
    return (
        <div>

        <nav className="fixed border-none  bg-black px-10 inset-x-0 top-0 flex flex-row justify-between items-center z-10 text-white">
            <h1 className="text-white text-3xl font-extrabold font-mono xs:text-xl1 md:text-4xl">
                <Link href={"/"}>R Nankho</Link>
            </h1>

            <div className="gap-9 lg:flex hidden  ">
                <Link href={"/"} className="hover:outline outline-offset-0 ">Home</Link>
                <Link href={"/about"} className="hover:outline outline-offset-0 ">About Us</Link>
                <Link href={"/product"} className="hover:outline outline-offset-0 ">Product</Link>
                <Link href={"/teams"} className="hover:outline outline-offset-0 ">Teams</Link>
            </div>

            <label className="btn bg-transparent text-yellow-600 border-none hover:bg-transparent swap swap-rotate lg:hidden">
                <input onClick={()=>setNav(!nav)} type="checkbox" />

              
                <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

              
                <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512">
                    <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
        </nav>
            <div className={`gap-4 py-2 flex flex-col bg-white absolute border2 right-0 text-center z-20 text-black ${!nav?'hidden':'fixed'}`} >
                <Link href={"/"} className="">Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/product"}>Product</Link>
                <Link href={"/teams"}>Teams</Link>
            </div>
        </div>
    )
}