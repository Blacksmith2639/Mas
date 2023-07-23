import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 383 101' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 68.704L42.4885 62.3808L84.9769 0L127.465 31.008L169.954 76.1216L212.442 29.6704L254.931 100.563L297.419 1.9456L339.908 19.2128L382.396 0.972799'
      stroke='url(#paint0_linear_624_2630)'
      strokeWidth={4}
    />
    <defs>
      <linearGradient
        id='paint0_linear_624_2630'
        x1={191.747}
        y1={-6.47521}
        x2={191.747}
        y2={107.525}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.16} stopColor='#FF1515' stopOpacity={0.99} />
        <stop offset={0.557292} stopColor='#009FE3' stopOpacity={0.74} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
