import { memo, SVGProps } from 'react';

const Line5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 347 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.0885315 0.44445L346.144 0.746947' stroke='#FBFBFB' />
  </svg>
);

const Memo = memo(Line5Icon);
export { Memo as Line5Icon };
