import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 363 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H362.261' stroke='#FBFBFB' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
