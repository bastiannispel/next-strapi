import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import BurgerMenu from './buttons/BurgerMenu';

const navItemStyle =
  'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

interface NavItemProps {
  name: string;
  route: string;
  subroutes?: NavItemProps[];
}

const navItems: NavItemProps[] = [
  { name: 'Home', route: '/' },
  { name: 'Projects', route: '/projects' },
  { name: 'About', route: '/about' },
  { name: 'Contact', route: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* nav container */}
          <div className="flex-1 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <Link href="/">
                <Image
                  className="block h-8 w-auto cursor-pointer hover:scale-95"
                  src="/Logo.png"
                  width={36}
                  height={36}
                  alt="Logo"
                />
              </Link>
            </div>

            {/* burger menu */}
            <div className="flex items-center sm:hidden">
              <BurgerMenu onClick={() => setOpen(!open)} />
            </div>

            {/* Nav Items */}
            <div className="hidden justify-end sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navItems.map((navItem) => (
                  <Link href={navItem.route} key={uuidv4()}>
                    <a className={navItemStyle}>{navItem.name}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((navItem) => (
              <Link href={navItem.route} key={uuidv4()}>
                <a className={`${navItemStyle} block test-base`}>
                  {navItem.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
