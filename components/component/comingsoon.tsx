"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function ComingSoon(): JSX.Element {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const calculateCountdown = (endTime: number): Countdown => {
    const now = new Date();
    const totalSeconds = Math.floor((endTime - now.getTime()) / 1000);

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [countdown, setCountdown] = useState<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (hasMounted) {
      const fetchEndTime = async () => {
        try {
          const response = await fetch('/api/countdown');
          const data = await response.json();
          const endTime = data.endTime;
          setCountdown(calculateCountdown(endTime));

          const timer = setInterval(() => {
            setCountdown(calculateCountdown(endTime));
          }, 1000);

          return () => clearInterval(timer);
        } catch (err) {
          console.error('Error fetching end time:', err);
        }
      };

      fetchEndTime();
    }
  }, [hasMounted]);

  if (!hasMounted) {
    return <></>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-gray-100 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/logo/logo-no-background.png" alt="FlexiFlowPay" className="h-10 w-auto cursor-pointer" />
          </Link>
          <nav>
            <ul className="flex space-x-4">
              {/* <li>
                <a className="hover:text-gray-400" href="#">
                  Contact
                </a>
              </li> */}
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
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">FlexiFlowPay</h1>
              <p className="text-2xl text-gray-600 dark:text-gray-400">The future of payment gateways is here.</p>
              <div className="flex justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-gray-100 dark:bg-gray-100 dark:text-gray-900">
                    Days
                  </div>
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">{countdown.days}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-gray-100 dark:bg-gray-100 dark:text-gray-900">
                    Hours
                  </div>
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">{countdown.hours}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-gray-100 dark:bg-gray-100 dark:text-gray-900">
                    Minutes
                  </div>
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">{countdown.minutes}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-gray-100 dark:bg-gray-100 dark:text-gray-900">
                    Seconds
                  </div>
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">{countdown.seconds}</span>
                </div>
              </div>
              <div className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">Coming Soon</div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-100 transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900"
                href="/contactUs"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-100 py-6 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>© 2023 FlexiFlowPay. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}