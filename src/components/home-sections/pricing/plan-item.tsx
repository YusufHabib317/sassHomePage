import CountUp from 'react-countup';
import { MainBtn } from '@/components';
import { plans } from '@/data';
import { cn } from '@/lib';

type PlanItemProps = {
  plan: (typeof plans)[0];
  index: number;
  isMonthly: boolean;
};

export function PlanItem(props: PlanItemProps) {
  const { plan, index, isMonthly } = props;
  return (
    <div
      key={plan.id}
      className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
    >
      {index === 1 && (
        <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
      )}

      <div
        className={cn(
          'absolute left-0 right-0 z-2 flex items-center justify-center',
          index === 1 ? '-top-6' : '-top-6 xl:-top-11',
        )}
      >
        <img
          src={plan.logo}
          alt={plan.title}
          className={cn(
            'object-contain drop-shadow-2xl',
            index === 1 ? 'size-[120px]' : 'size-[88px]',
          )}
        />
      </div>

      <div
        className={cn(
          'relative flex flex-col items-center',
          index === 1 ? 'pt-24' : 'pt-12',
        )}
      >
        <div
          className={cn(
            'small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase',
            index === 1 ? 'border-p3 text-p3' : 'border-p1 text-p1',
          )}
        >
          {plan.title}
        </div>

        <div className="relative z-2 flex items-center justify-center">
          <div
            className={cn(
              'h-num flex items-start',
              index === 1 ? 'text-p3' : 'text-p4',
            )}
          >
            ${' '}
            <CountUp
              start={plan.priceMonthly}
              end={isMonthly ? plan.priceMonthly : plan.priceYearly}
              duration={0.4}
              useEasing={false}
              preserveValue
            />
          </div>
          <div className="small-1 relative top-3 ml-1 uppercase">/ mo</div>
        </div>
      </div>

      <div
        className={cn(
          'body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4',
          index === 1 && 'border-b',
        )}
      >
        {plan.caption}
      </div>

      <ul className="mx-auto space-y-4 xl:px-7">
        {plan.features.map((feature) => (
          <li key={feature} className="relative flex items-center gap-5">
            <img
              src={'/images/check.png'}
              alt="check"
              className="size-10 object-contain"
            />
            <p className="flex-1">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex w-full justify-center">
        <MainBtn iconStr={plan.icon}>Get Started</MainBtn>
      </div>

      {index === 1 && (
        <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
          Limited time offer
        </p>
      )}
    </div>
  );
}
