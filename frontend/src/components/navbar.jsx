import React from 'react'
const navbar = () => {
  return (
    <header className="sticky inset-0 z-50 border-b border-slate-400 bg-white-200 backdrop-blur-lg">
  <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
    <div className="relative flex items-center">
      <a href="/"
      className='text-green-600 font-semibold tracking-wide text-2xl uppercase sm:text-3xl'>
        EDOC<span className='text-red-600'>+</span>
        
      </a>
    </div>
    <ul className="hidden items-center justify-center gap-6 md:flex">
      <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
        <a href="#">Our Services</a>
      </li>
      <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
        <a href="#">Contact us</a>
      </li>
      <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
        <a href="#">About us</a>
      </li>
    </ul>
    <div className="flex-grow" />
    <div className="hidden items-center justify-center gap-6 md:flex">
      <a href="#" className="font-dm text-sm font-medium text-slate-700">
        Login 
      </a>
      <a
        href="#"
        className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
      >
        Sign up 
      </a>
    </div>
    <div className="relative flex items-center justify-center md:hidden">
      <button type="button">
        <svg
          // xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-6 w-auto text-slate-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  </nav>
</header>


  )
}

export default navbar