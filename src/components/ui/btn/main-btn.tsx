import { cn } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import { Marker } from '../marker';

type MainBtnProps = {
  children: React.ReactNode;
  iconStr: string;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
};
export function MainBtn(props: MainBtnProps) {
  const { children, iconStr, href, containerClassName, onClick, markerFill } =
    props;

  const Inner = () => {
    return (
      <>
        <span
          className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before
        group-hover:before:opacity-100 overflow-hidden
        "
        >
          <span className="absolute -left-[1px]">
            <Marker fill={markerFill} />
          </span>
          {iconStr && (
            <Image
              src={iconStr}
              width={30}
              height={30}
              alt="icon"
              className="size-10 mr-5 object-contain z-10"
            />
          )}
          <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
            {children}
          </span>
        </span>

        <span className="glow-before glow-after" />
      </>
    );
  };

  if (href && href?.length !== 0) {
    return (
      <Link
        href={href}
        className={cn(
          'relative p-0.5 g5 rounded-2xl shadow-500 group',
          containerClassName,
        )}
      >
        <Inner />
      </Link>
    );
  }

  return (
    <button
      className={cn(
        'relative p-0.5 g5 rounded-2xl shadow-500 group',
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
}
