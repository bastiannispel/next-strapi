import React from 'react';
import Link from 'next/link';

const linkStyles = 'hover:font-semibold px-2 rounded-full';

export default function Footer() {
  return (
    <footer className="flex w-screen h-24 text-gray-600 md:mt-12 lg:mt-24">
      <div className="flex flex-col relative items-center justify-center mx-auto">
        <div className="flex text-lg">
          <Link href="/impressum">
            <a className={linkStyles}>Impressum</a>
          </Link>
          <Link href="/datenschutzerklaerung">
            <a className={linkStyles}>Datenschutzerklärung</a>
          </Link>
        </div>
        <p className="text-sm">
          &copy; 2022 Codingdesign. Alle Rechte vorbehalten
        </p>
      </div>
    </footer>
  );
}
