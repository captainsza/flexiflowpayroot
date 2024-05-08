/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import SupportPage from "@/components/support";
import { Button } from "@/components/ui/button";
import { MountainIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Pricing
                </a>
              </li> */}
              {/* <li>
                <a className="hover:text-gray-400" href="#">
                  Contact
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      <SupportPage/>
      <footer className="bg-gray-900 text-gray-100 py-6 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>© 2024 FlexiFlowPay. All rights reserved.</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                {/* <a className="hover:text-gray-400" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Privacy
                </a> */}
              </li>
              {/* <li>
                <a className="hover:text-gray-400" href="#">
                  Support
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
