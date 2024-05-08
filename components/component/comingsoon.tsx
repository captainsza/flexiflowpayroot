"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";

export function ComingSoon(): JSX.Element {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const targetDate = new Date('2024-05-25T00:00:00');
  const [remainingTime, setRemainingTime] = useState(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-gray-100 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/logo/logo-no-background.png" alt="FlexiFlowPay" className="h-10 w-auto cursor-pointer" />
          </Link>
          <nav>
            <ul className="flex space-x-4">
       
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 relative">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">FlexFlowPay</h1>
          <p className="mt-4 text-lg font-medium sm:text-xl md:text-2xl">Coming Soon</p>
        </div>
        <div className="flex items-center space-x-4 rounded-lg bg-white/10 px-6 py-4 text-2xl font-medium sm:text-3xl md:text-4xl">
  <div>
    <div className="font-bold">{days}</div>
    <div className="text-sm font-normal">Days</div>
  </div>
  <div>
    <div className="font-bold">{hours}</div>
    <div className="text-sm font-normal">Hours</div>
  </div>
  <div>
    <div className="font-bold">{minutes}</div>
    <div className="text-sm font-normal">Minutes</div>
  </div>
  <div>
    <div className="font-bold">{seconds}</div>
    <div className="text-sm font-normal">Seconds</div>
  </div>
</div>
        <Link
          className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-[#6366F1] transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1] sm:text-xl md:text-2xl"
          href="#"
        >
          Contact Us
        </Link>
        <div className="flex space-x-4">
          <Link
            className="text-2xl transition-colors hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1]"
            href="#"
          >
            <TwitterIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            className="text-2xl transition-colors hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1]"
            href="#"
          >
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            className="text-2xl transition-colors hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1]"
            href="#"
          >
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            className="text-2xl transition-colors hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1]"
            href="#"
          >
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-100 py-6 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>© 2024 FlexiFlowPay. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}


function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function FacebookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}