"use client"
import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import jude from "../../public/Assets/ashley.png"
import jawa from "../../public/Assets/jawahar.jpg"
import ibus from "../../public/Assets/ibu.jpeg"
import anand from "../../public/Assets/anand.jpg"
import surya from "../../public/Assets/surya.jpg"
import levin from "../../public/Assets/levin.jpg"
import subha from "../../public/Assets/subha1.png"
import manoj from "../../public/Assets/manoj.png"
const Ourteams = () => {
    const team = [
        {
            name: "Ashley Jude",
            dept: "Marketing Team",
            srcs: jude,
            social: {
                linkedin: "#",
                instagram: "#",
                facebook: "#",
                twitter: "#",
            },
        },
        {
            name: "Anand",
            dept: "App Developer",
            srcs: anand,
            social: {
                linkedin: "#",
                instagram: "#",
                facebook: "#",
                twitter: "#",
            },
        },
        {
            name: "Surya",
            dept: "Web Developer",
            srcs: surya,
            social: {
                linkedin: "#",
                instagram: "#",
                facebook: "#",
                twitter: "#",
            },
        },
        {
            name: "Mohamed Ibrahim",
            dept: "Web Developer",
            srcs: ibus,
            social: {
                linkedin: "#",
                instagram: "#",
                facebook: "#",
                twitter: "#",
            },
        },
        {
            name: "Levin",
            dept: "Web Developer",
            srcs: levin,
            social: {
                linkedin: "#",
                instagram: "#",
                facebook: "#",
                twitter: "#",
            },
        },
        {
            name: "Jawahar",
            dept: "Graphic Designer",
            srcs: jawa,
            social: {
                linkedin: "#",
                instagram: "#",
                facebook: "#",
                twitter: "#",
            },
        },
        {
            name: "Subha",
            dept: "Web Developer",
            srcs: subha,
            social: {
                linkedin: "#",
                instagram: "#",
                facebook: "#",
                twitter: "#",
            },
        },
        {
            name: "Manoj",
            dept: "Marketing Team",
            srcs: manoj,
            social: {
                linkedin: "#",
                instagram: "#",
                facebook: "#",
                twitter: "#",
            },
        },
    ]

    return (
        <div className='fen py-10 mt-8'>
            <div className='my-5 mx-10 text-center z-10'>
                <h2 className='text-center text-sm py-1 px-5 rounded-3xl text-white bg-black w-fit mb-3 m-auto'>Team</h2>
                <h2 className='font-semibold text-5xl mb-8 text-white'>The Amazing Team Behind GOFS!</h2>
            </div>

            <div className='max-w-7xl mx-auto gap-6 flex justify-center items-center flex-wrap'>
                {team.map((item, index) => (
                    <div key={index} className='bg-neutral-100 flex flex-col items-center w-[260px] shadow-lg rounded-md overflow-hidden'>
                        <div className='w-full'>
                            <Image 
                                src={item.srcs} 
                                alt={item.name} 
                                className='w-full object-cover rounded-t-md h-80'
                            />
                        </div>
                        <div className='py-4 px-4 text-center'>
                            <h2 className='text-xl font-semibold'>{item.name}</h2>
                            <h3 className='text-lg font-light'>{item.dept}</h3>
                        </div>
                        {/* Social Media Icons */}
                        <div className='flex gap-4 pb-4'>
                            <a href={item.social.linkedin} target='_blank' rel='noopener noreferrer' className='hover:text-blue-600'>
                                <Linkedin size={22} className='text-blue-300' />
                            </a>
                            <a href={item.social.instagram} target='_blank' rel='noopener noreferrer' className='hover:text-pink-500'>
                                <Instagram size={22} className='text-red-500'/>
                            </a>
                            <a href={item.social.facebook} target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>
                                <Facebook size={22} className='text-blue-500' />
                            </a>
                            <a href={item.social.twitter} target='_blank' rel='noopener noreferrer' className='hover:text-blue-400'>
                                <Twitter size={22}  className='text-black'/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ourteams
