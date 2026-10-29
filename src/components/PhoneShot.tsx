import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
};

export function PhoneShot({ src, alt, label, priority, className = '' }: Props) {
  return (
    <figure className={`mx-auto w-full max-w-[260px] ${className}`}>
      <div className="phone-frame overflow-hidden rounded-[2rem] p-2">
        <div className="overflow-hidden rounded-[1.55rem] bg-bg">
          <Image
            src={src}
            alt={alt}
            width={402}
            height={874}
            className="h-auto w-full"
            priority={priority}
          />
        </div>
      </div>
      {label ? (
        <figcaption className="mt-3 text-center text-sm font-medium text-slate">{label}</figcaption>
      ) : null}
    </figure>
  );
}
