import { memo, SVGProps } from 'react';

const VectorIcon16 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H11.9012' stroke='#FBFBFB' />
  </svg>
);

const Memo = memo(VectorIcon16);
export { Memo as VectorIcon16 };
