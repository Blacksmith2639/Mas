import { memo, SVGProps } from 'react';

const Line5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 356 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.961117 0.44445L355.158 0.746948' stroke='#FBFBFB' />
  </svg>
);

const Memo = memo(Line5Icon);
export { Memo as Line5Icon };
