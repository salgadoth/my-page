'use client'
import { useState } from 'react'
import LogoSvg from '../layout/Logo'
import Menu from './Menu'
import MenuItem from './MenuItem'

export default function TopBar(props: any) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="z-40 flex flex-wrap items-center justify-between bg-indigo h-20 sticky top-0 w-full px-4 md:px-10">
      {/* Logo */}
      <LogoSvg width={85} height={85} url="/" />

      {/* Right-side Desktop Menu */}
      <div className="hidden md:block">
        <Menu>
          <MenuItem text="About" url="/about" linkStyling="pl-[1em]" />
          <MenuItem text="Experience" url="/experiences" />
          <MenuItem text="Projects" url="/projects" linkStyling="pl-[1em]" />
          <MenuItem text="Contact" url="/contact" />
          <MenuItem text="Resume" url="/resume" renderAs="button" />
        </Menu>
      </div>

      {/* Mobile Only: Resume + Hamburger */}
      <div className="md:hidden flex items-center space-x-4">
        {/* Resume button on the left */}
        <MenuItem text="Resume" url="/resume" renderAs="button" />

        {/* Hamburger icon */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none h-full"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] rounded-md w-6 bg-white transition-transform duration-300 ease-in-out
              ${isOpen ? 'rotate-[45deg]  translate-y-[12px] mt-[-12px]' : ''}`}
          />
          <span
            className={`block h-[2px] rounded-md w-6 bg-white my-[4px] transition-transform duration-300 ease-in-out
              ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-[2px] rounded-md w-6 bg-white transition-transform duration-300 ease-in-out
              ${isOpen ? '-rotate-[45deg]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex align-middle absolute top-20 w-full h-14 bg-indigo shadow-md md:hidden z-40 xs:right-0">
          <Menu>
            <MenuItem
              text="About"
              url="/about"
              linkStyling="pl-[5em] xs:pl-[3em]"
            />
            <MenuItem
              text="Experience"
              url="/experiences"
              linkStyling="pl-[2em] xs:pl-[.7em]"
            />
            <MenuItem
              text="Projects"
              url="/projects"
              linkStyling="pl-[2em] xs:pl-[1em]"
            />
            <MenuItem text="Contact" url="/contact" linkStyling="xs:w-[80%]" />
          </Menu>
        </div>
      )}
    </div>
  )
}
