'use client';

import { Section } from '@/data';
import { cn } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

type NavLinkProps = {
  title: string;
};

export function Header() {
  const [hasScroll, setHasScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function NavLink(props: NavLinkProps) {
    const { title } = props;
    return (
      <ScrollLink
        className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer 
                   hover:text-p1 max-lg:my-4 max-lg:h5"
        to={title}
        smooth
        spy
        offset={-100}
        activeClass="nav-active"
        onClick={() => setIsOpen(false)}
      >
        {title}
      </ScrollLink>
    );
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500',
        hasScroll && 'py-2 bg-black-100 backdrop-blur-[8px]',
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <Link href={'/'} className="lg:hidden flex-1 cursor-pointer z-2">
          <Image
            src={'/images/xora.svg'}
            alt="xora logo"
            width={115}
            height={35}
          />
        </Link>
        <div
          className={cn(
            'w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 transition-opacity duration-100',
            isOpen ? 'max-lg:opacity-1' : 'max-lg:pointer-events-none',
          )}
        >
          <div
            className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6
             max-lg:overflow-hidden sidebar-before max-md:px-4"
          >
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title={Section.Feature} />
                  <div className="dot" />
                  <NavLink title={Section.Pricing} />
                </li>

                <li className="nav-logo">
                  <ScrollLink
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <Image
                      src={'images/xora.svg'}
                      alt="xora logo"
                      width={160}
                      height={55}
                    />
                  </ScrollLink>
                </li>

                <li className="nav-li">
                  <NavLink title={Section.faq} />
                  <div className="dot" />
                  <NavLink title="Download" />
                </li>
              </ul>
            </nav>

            <div
              className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px]
              translate-x-[-290px] -translate-y-1/2 rotate-90
            "
            >
              <Image
                src={'/images/bg-outlines.svg'}
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <Image
                src={'/images/bg-outlines-fill.png'}
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={handleOpenMenu}
        >
          <Image
            src={`/images/${isOpen ? 'close' : 'magic'}.svg`}
            width={25}
            height={25}
            alt="menu open"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
}
