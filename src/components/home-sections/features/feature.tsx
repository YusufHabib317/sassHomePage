'use client';

import { details, features, Section } from '@/data';
import { Element } from 'react-scroll';
import { FeatureItem } from './feature-item';

export function Features() {
  return (
    <section>
      <Element name={Section.Feature}>
        <div className="container">
          <div
            className="relative flex md:flex-wrap flex-nowrap rounded-7xl md:overflow-hidden max-md:flex-col feature-after
                           md:g7 max-md:border-none max-md:rounded-none max-md:gap-3"
          >
            {features.map((f) => {
              return <FeatureItem key={f.id} {...f} />;
            })}

            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map((d) => {
                return (
                  <li key={d.id} className="relative pt-16 px-4 pb-14">
                    <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                    <div
                      className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full
                                    hover:border-s4 transition-all duration-500 shadow-500 size-20"
                    >
                      <img
                        src={d.icon}
                        className="size-17/20 object-contain z-20"
                        alt={d.title}
                      />
                    </div>

                    <h3 className="relative z-2 max-w-36 max-auto my-0 base-small text-center uppercase">
                      {d.title}
                    </h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
}
