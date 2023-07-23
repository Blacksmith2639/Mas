import { memo, SVGProps } from 'react';

const Rectangle42Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 137 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 14.0952C0 6.31062 6.31063 0 14.0952 0H122.905C130.689 0 137 6.31062 137 14.0952V14.0952C137 21.8797 130.689 28.1904 122.905 28.1904H14.0952C6.31063 28.1904 0 21.8797 0 14.0952V14.0952Z'
      fill='#5B4949'
    />
  </svg>
);

const Memo = memo(Rectangle42Icon);
export { Memo as Rectangle42Icon };
