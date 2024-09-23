'use client';

import { PricingBtn } from '@/components';
import { plans, Section } from '@/data';
import { cn } from '@/lib';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { PlanItem } from './plan-item';

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);
  return (
    <section className="">
      <Element name={Section.Pricing}>
        <div className="container">
          <div
            className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40
                          pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16"
          >
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible Pricing For Teams Of All Sizes
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <PricingBtn
                title="Monthly"
                isMonthly={isMonthly}
                onClick={() => setIsMonthly(true)}
              />
              <PricingBtn
                title="Annual"
                isMonthly={isMonthly}
                onClick={() => setIsMonthly(false)}
              />

              <div
                className={cn(
                  'g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500',
                  !isMonthly && 'translate-x-full',
                )}
              />

              <div className="pricing-bg">
                <img
                  src="/images/bg-outlines.svg"
                  width={960}
                  height={380}
                  alt="outline"
                  className="relative z-2"
                />
                <img
                  src="/images/bg-outlines-fill.png"
                  width={960}
                  height={380}
                  alt="outline"
                  className="absolute inset-0 opacity-5 mix-blend-soft-light"
                />
              </div>
            </div>
          </div>

          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <PlanItem
                key={plan.id}
                plan={plan}
                index={index}
                isMonthly={isMonthly}
              />
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
}
