import { MainBtn } from '@/components';
import { features } from '@/data';
import Image from 'next/image';

type FeatureItemProps = (typeof features)[0];

export function FeatureItem(props: FeatureItemProps) {
  const { button, caption, icon, text, title } = props;

  return (
    <div
      className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7
         max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
    >
      <div className="w-full flex justify-start items-start">
        <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
          <div className="w-0.5 h-16 bg-s3" />
          <div className="relative size-28">
            <Image fill src={icon} alt={title} className="object-contain" />
          </div>
        </div>
      </div>

      <p className="caption mb-5 max-md:mb-6">{caption}</p>
      <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
        {title}
      </h2>

      <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
      <MainBtn iconStr={button.icon}>{button.title}</MainBtn>
    </div>
  );
}
