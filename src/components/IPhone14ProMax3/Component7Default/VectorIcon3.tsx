import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H12.1812' stroke='#FBFBFB' />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };