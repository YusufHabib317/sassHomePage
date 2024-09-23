import { cn } from '@/lib';

type PricingBtnProps = {
  isMonthly: boolean;
  title: string;
  onClick: () => void;
};
export function PricingBtn(props: PricingBtnProps) {
  const { isMonthly, title, onClick } = props;
  return (
    <button className={cn('pricing-head_btn text-p4')} onClick={onClick}>
      {title}
    </button>
  );
}
