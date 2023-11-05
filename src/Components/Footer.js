import React from 'react'
import logo from '../Images/logo.svg'

export default function Footer() {
  return (
    <div>
        <footer className="reverse-gradient-bg">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src= {logo} alt="Flowbite Logo" />
                    <span className="mt-2 self-center text-2xl signature whitespace-nowrap dark:text-white branded">Horoscoop</span>
                </a>
                <ul className="flex flex-wrap items-center text-sm font-medium text-white-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 text-white ">Legal</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 text-white">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 text-white">Careers</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline text-white">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
</footer>
    </div>
  )
}
