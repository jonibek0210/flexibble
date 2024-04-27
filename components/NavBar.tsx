"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/firebase/firebase.config"
import { useRouter } from "next/navigation"

import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'
import { signOut } from 'firebase/auth'

const NavBar = () => {
    const session = null
    const [user] = useAuthState(auth)
    const router = useRouter()

    console.log(user);

    return (
        <nav className='flexBetween navbar'>
            <div className="flex-1 flexStart gap-10">
                <Link href={"/"}>
                    <Image
                        src={"logo.svg"}
                        width={115}
                        height={43}
                        alt='flexibble'
                    />
                </Link>

                <ul className='xl:flex hidden text-small gap-7'>
                    {
                        NavLinks.map((link) => (
                            <Link href={link.href} key={link.key}>
                                {link.text}
                            </Link>
                        ))
                    }
                </ul>
            </div>

            <div className="flexCenter gap-4">
                <button onClick={() => signOut(auth)}>
                    Log out
                </button>
                {
                    user ? (
                        <>
                            <Link href={"/create-project"}>
                                {user?.email}
                            </Link>
                        </>
                    ) : (
                        <AuthProviders />
                    )
                }
            </div>
        </nav>
    )
}

export default NavBar
