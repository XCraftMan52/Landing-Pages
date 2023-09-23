import Link from "next/link";
import React from "react";

function Landing() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-center font-mono text-center space-y-8'>
        <h2 className='font-bold text-4xl'>
          You have reached a domain managed by Lucas Webber.
        </h2>
        <h3 className='font-bold'>
          This page does not exist. Try navigating to the pages below.
        </h3>
        <div className='flex space-x-3 mt-12 justify-center'>
          <Link href='https://lucaswebber.dev'>
            <button className='rounded-xl border-[#ff00fb] font-bold border-8 p-2'>
              Portfolio Website
            </button>
          </Link>
          <Link href='https://webberlights.com'>
            <button className='rounded-xl border-[#ff00fb] font-bold border-8 p-2'>
              Webber Lights
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Landing;
