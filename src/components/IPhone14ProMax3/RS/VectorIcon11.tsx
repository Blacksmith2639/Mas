import { memo, SVGProps } from 'react';

const VectorIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 362 101' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 68.704L40.185 62.3808L80.3699 0L120.555 31.008L160.74 76.1216L200.925 29.6704L241.11 100.563L281.295 1.9456L321.48 19.2128L361.665 0.972799'
      stroke='url(#paint0_linear_624_2739)'
      strokeWidth={4}
    />
    <defs>
      <linearGradient
        id='paint0_linear_624_2739'
        x1={181.352}
        y1={-6.47521}
        x2={181.352}
        y2={107.525}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.16} stopColor='#FF1515' stopOpacity={0.99} />
        <stop offset={0.557292} stopColor='#009FE3' stopOpacity={0.74} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon11);
export { Memo as VectorIcon11 };
