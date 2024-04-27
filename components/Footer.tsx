// 'use client'

import { footerLinks } from '@/constants'
import { db } from '@/firebase/firebase.config'
import { getData } from '@/lib/firestore'
import { collection, getDocs, query } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type ColumnProps = {
    title: string
    links: Array<string>
}

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {
                links.map((link) => <Link href={"/"} key={link}>{link}</Link>)
            }
        </ul>
    </div>
)

const Footer = () => {
    // const [data, setdata] = useState<any>([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const ref = query(collection(db, "todos"))

    //             const snapshot = await getDocs(ref)

    //             const data = snapshot.docs.map(doc => ({
    //                 id: doc.id,
    //                 ...doc.data()
    //             }))
    //             setdata(data)
    //         } catch (error) {

    //         }
    //     }

    //     fetchData()
    // }, []);

    // console.log(data);

    return (
        <footer className='flexStatr footer'>
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image
                        src={"/logo-purple.svg"}
                        width={115}
                        height={38}
                        alt='Flexibble'
                    />

                    <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                        Flexibble is the world's leading community for creatives to share, grow, and get hired.
                    </p>
                </div>

                <div className="flex flex-wrap gap-12">
                    <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

                    <div className="flex-1 flex flex-col gap-4">
                        <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                        <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                    </div>

                    <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

                    <div className="flex-1 flex flex-col gap-4">
                        <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                        <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                    </div>

                    <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
                </div>
            </div>

            <div className="flexBetween footer_copyright mt-10 max-sm:mt-5">
                <p>@2024 Flexibble. All rights reserved</p>
                <p className='text-gray'>
                    <span className='text-black font-semibold'>10.214 </span>
                    projects submitted
                </p>
            </div>
        </footer>
    )
}

export default Footer
