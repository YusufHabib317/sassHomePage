'use client';

import { MainBtn } from '@/components';
import { Link as LinkScroll } from 'react-scroll';
import Image from 'next/image';

import { Element } from 'react-scroll';

export function Hero() {
  return (
    <section
      className="
        relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 
        max-md:pt-36 max-md:pb-36"
    >
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-w-318 ">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>

            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simple
            </h1>

            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We Designed XORA AI Video Editor To Be An Easy To Use, Quick To
              Learn, And Surprisingly Powerful.
            </p>

            <LinkScroll to="feature" offset={-100} spy smooth>
              <MainBtn iconStr="/images/zap.svg">Try it now</MainBtn>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
}
