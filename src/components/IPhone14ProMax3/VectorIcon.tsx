import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 371 101' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 68.704L41.1304 62.3808L82.2608 0L123.391 31.008L164.522 76.1216L205.652 29.6704L246.782 100.563L287.913 1.9456L329.043 19.2128L370.174 0.972799'
      stroke='url(#paint0_linear_624_2609)'
      strokeWidth={4}
    />
    <defs>
      <linearGradient
        id='paint0_linear_624_2609'
        x1={185.618}
        y1={-6.47521}
        x2={185.618}
        y2={107.525}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.16} stopColor='#FF1515' stopOpacity={0.99} />
        <stop offset={0.557292} stopColor='#009FE3' stopOpacity={0.74} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
