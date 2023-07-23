import { memo, SVGProps } from 'react';

const Rectangle36Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 99 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 13.9556C0 6.24814 6.24813 0 13.9556 0H84.6531C92.3606 0 98.6087 6.24814 98.6087 13.9556V13.9556C98.6087 21.6631 92.3606 27.9112 84.6531 27.9112H13.9556C6.24814 27.9112 0 21.6631 0 13.9556V13.9556Z'
      fill='#5B4949'
    />
  </svg>
);

const Memo = memo(Rectangle36Icon);
export { Memo as Rectangle36Icon };
