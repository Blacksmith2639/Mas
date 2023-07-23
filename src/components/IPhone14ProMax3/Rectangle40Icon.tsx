import { memo, SVGProps } from 'react';

const Rectangle40Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 113 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 14.2698C0 6.48522 6.31063 0.174598 14.0952 0.174598H98.9048C106.689 0.174598 113 6.48522 113 14.2698V14.2698C113 22.0543 106.689 28.3649 98.9048 28.3649H14.0952C6.31062 28.3649 0 22.0543 0 14.2698V14.2698Z'
      fill='#5B4949'
    />
  </svg>
);

const Memo = memo(Rectangle40Icon);
export { Memo as Rectangle40Icon };
