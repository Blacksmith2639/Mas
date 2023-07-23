import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import { RS } from '../RS/RS';
import classes from './Component7Variant3.module.scss';
import { Line5Icon } from './Line5Icon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 395:3823 */
export const Component7Variant3: FC<Props> = memo(function Component7Variant3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <RS
        className={classes.rS}
        classes={{ group: classes.group, group2: classes.group2, bettingLine: classes.bettingLine }}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
          vector2: props.swap?.vector || <VectorIcon2 className={classes.icon2} />,
          line5: <Line5Icon className={classes.icon3} />,
          vector3: <VectorIcon3 className={classes.icon4} />,
          vector4: <VectorIcon4 className={classes.icon5} />,
          vector5: <VectorIcon5 className={classes.icon6} />,
          vector6: <VectorIcon6 className={classes.icon7} />,
          vector7: <VectorIcon7 className={classes.icon8} />,
        }}
      />
      <div className={classes.frame17}>
        <div className={classes.frame17__aLL}>
          <div className={classes.frame17__aLL__aLL68}>ALL:68%</div>
        </div>
        <div className={classes.frame17__frame11}>
          <div className={classes.frame17__frame11__aLL682}>ALL:68%</div>
        </div>
        <div className={classes.frame17__frame10}>
          <div className={classes.frame17__frame10__l1055}>L10:55%</div>
        </div>
        <div className={classes.frame17__frame15}>
          <div className={classes.frame17__frame15__l548}>L5 :48%</div>
        </div>
        <div className={classes.frame17__frame14}>
          <div className={classes.frame17__frame14__vs76}>Vs :76%</div>
        </div>
      </div>
    </div>
  );
});
