import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import { GroupIcon } from './GroupIcon';
import { GroupIcon2 } from './GroupIcon2';
import { Line5Icon } from './Line5Icon';
import classes from './RS.module.scss';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';
import { VectorIcon8 } from './VectorIcon8';
import { VectorIcon9 } from './VectorIcon9';
import { VectorIcon10 } from './VectorIcon10';
import { VectorIcon11 } from './VectorIcon11';
import { VectorIcon12 } from './VectorIcon12';
import { VectorIcon13 } from './VectorIcon13';
import { VectorIcon14 } from './VectorIcon14';
import { VectorIcon15 } from './VectorIcon15';
import { VectorIcon16 } from './VectorIcon16';

interface Props {
  className?: string;
  classes?: {
    group?: string;
    group2?: string;
    bettingLine?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
    line5?: ReactNode;
    vector3?: ReactNode;
    vector4?: ReactNode;
    vector5?: ReactNode;
    vector6?: ReactNode;
    vector7?: ReactNode;
  };
  text?: {
    _115?: ReactNode;
    _117?: ReactNode;
    _120?: ReactNode;
    _123?: ReactNode;
    _125?: ReactNode;
    _25?: ReactNode;
  };
}
/* @figmaId 385:1628 */
export const RS: FC<Props> = memo(function RS(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.root__vector}>
        {props.swap?.vector || <VectorIcon className={classes.root__vector__icon} />}
      </div>
      <div className={classes.root__vector2}>
        <VectorIcon2 className={classes.root__vector2__icon2} />
      </div>
      {props.text?._115 != null ? props.text?._115 : <div className={classes.root___115}>01/15</div>}
      <div className={classes.root__vector3}>
        <VectorIcon3 className={classes.root__vector3__icon3} />
      </div>
      {props.text?._117 != null ? props.text?._117 : <div className={classes.root___117}>01/17</div>}
      <div className={classes.root__vector4}>
        <VectorIcon4 className={classes.root__vector4__icon4} />
      </div>
      {props.text?._120 != null ? props.text?._120 : <div className={classes.root___120}>01/20</div>}
      <div className={classes.root__vector5}>
        <VectorIcon5 className={classes.root__vector5__icon5} />
      </div>
      {props.text?._123 != null ? props.text?._123 : <div className={classes.root___123}>01/23</div>}
      <div className={classes.root__vector6}>
        <VectorIcon6 className={classes.root__vector6__icon6} />
      </div>
      {props.text?._125 != null ? props.text?._125 : <div className={classes.root___125}>01/25</div>}
      <div className={classes.root__vector7}>
        <VectorIcon7 className={classes.root__vector7__icon7} />
      </div>
      {props.text?._25 != null ? props.text?._25 : <div className={classes.root___25}>02/05</div>}
      <div className={classes.root__vector8}>
        <VectorIcon8 className={classes.root__vector8__icon8} />
      </div>
      <div className={classes.root___28}>02/08</div>
      <div className={classes.root__vector9}>
        <VectorIcon9 className={classes.root__vector9__icon9} />
      </div>
      <div className={classes.root___210}>02/10</div>
      <div className={classes.root__vector10}>
        <VectorIcon10 className={classes.root__vector10__icon10} />
      </div>
      <div className={classes.root___215}>02/15</div>
      <div className={`${props.classes?.group || ''} ${classes.root__group}`}>
        <GroupIcon className={classes.root__group__icon11} />
      </div>
      <div className={classes.root__vector11}>
        {props.swap?.vector2 || <VectorIcon11 className={classes.root__vector11__icon12} />}
      </div>
      <div className={classes.root___2}>2</div>
      <div className={`${props.classes?.group2 || ''} ${classes.group2}`}>
        <GroupIcon2 className={classes.group2__icon13} />
      </div>
      <div className={classes.line5}>{props.swap?.line5 || <Line5Icon className={classes.line5__icon14} />}</div>
      <div className={classes._65}>6.5</div>
      <div className={classes.root__vector12}>
        {props.swap?.vector3 || <VectorIcon12 className={classes.root__vector12__icon15} />}
      </div>
      <div className={classes.root__unnamed}>0</div>
      <div className={classes.root__vector13}>
        {props.swap?.vector4 || <VectorIcon13 className={classes.root__vector13__icon16} />}
      </div>
      <div className={classes.root___4}>4</div>
      <div className={classes.root__vector14}>
        {props.swap?.vector5 || <VectorIcon14 className={classes.root__vector14__icon17} />}
      </div>
      <div className={classes.root___8}>8</div>
      <div className={classes.root__vector15}>
        {props.swap?.vector6 || <VectorIcon15 className={classes.root__vector15__icon18} />}
      </div>
      <div className={classes.root___12}>12</div>
      <div className={classes.root__vector16}>
        {props.swap?.vector7 || <VectorIcon16 className={classes.root__vector16__icon19} />}
      </div>
      <div className={classes.root___16}>16</div>
      <div className={classes._42}>4</div>
      <div className={classes._13}>13</div>
      <div className={classes._9}>9</div>
      <div className={classes._3}>3</div>
      <div className={classes._82}>8</div>
      <div className={classes._132}>13</div>
      <div className={classes._11}>11</div>
      <div className={classes._32}>3</div>
      <div className={classes.jamesHardenPHISG}>
        <div className={classes.jamesHardenPHISG__textBlock}>James Harden</div>
        <div className={classes.jamesHardenPHISG__textBlock2}> PHI/SG</div>
      </div>
      <div className={`${props.classes?.bettingLine || ''} ${classes.bettingLine}`}>
        <div className={classes.bettingLine__overUnder}>
          <p className={classes.bettingLine__overUnder__labelWrapper}>
            <span className={classes.bettingLine__overUnder__labelWrapper__label}>Over </span>
            <span className={classes.bettingLine__overUnder__labelWrapper__label2}> </span>
            <span className={classes.bettingLine__overUnder__labelWrapper__label3}>Under</span>
          </p>
        </div>
        <div className={classes.bettingLine___165}>16.5</div>
        <div className={classes.bettingLine__pts}>Pts</div>
      </div>
    </div>
  );
});
