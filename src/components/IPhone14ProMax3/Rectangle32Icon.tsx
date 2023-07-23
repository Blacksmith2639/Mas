import { memo, SVGProps } from 'react';

const Rectangle32Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 89 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 14.1302C0 6.42274 6.24813 0.174598 13.9556 0.174598H74.0879C81.7953 0.174598 88.0435 6.42274 88.0435 14.1302V14.1302C88.0435 21.8377 81.7953 28.0858 74.0879 28.0858H13.9556C6.24814 28.0858 0 21.8377 0 14.1302V14.1302Z'
      fill='#5B4949'
    />
  </svg>
);

const Memo = memo(Rectangle32Icon);
export { Memo as Rectangle32Icon };
