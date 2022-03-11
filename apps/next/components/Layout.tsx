import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="">
        <main className="">{children}</main>
      </div>
      <Footer />
    </>
  );
}
