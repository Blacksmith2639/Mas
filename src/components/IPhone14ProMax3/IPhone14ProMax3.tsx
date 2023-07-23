import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.scss';
import { Component7Default } from './Component7Default/Component7Default';
import { Component7Variant2 } from './Component7Variant2/Component7Variant2';
import { Component7Variant3 } from './Component7Variant3/Component7Variant3';
import { Ellipse3Icon } from './Ellipse3Icon';
import { Frame7Icon } from './Frame7Icon';
import classes from './IPhone14ProMax3.module.scss';
import { Rectangle32Icon } from './Rectangle32Icon';
import { Rectangle33Icon } from './Rectangle33Icon';
import { Rectangle34Icon } from './Rectangle34Icon';
import { Rectangle35Icon } from './Rectangle35Icon';
import { Rectangle36Icon } from './Rectangle36Icon';
import { Rectangle37Icon } from './Rectangle37Icon';
import { Rectangle38Icon } from './Rectangle38Icon';
import { Rectangle39Icon } from './Rectangle39Icon';
import { Rectangle40Icon } from './Rectangle40Icon';
import { Rectangle41Icon } from './Rectangle41Icon';
import { Rectangle42Icon } from './Rectangle42Icon';
import { Rectangle43Icon } from './Rectangle43Icon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';

interface Props {
  className?: string;
}
/* @figmaId 514:2433 */
export const IPhone14ProMax3: FC<Props> = memo(function IPhone14ProMax3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame33}>
        <Component7Default
          className={classes.component7Default}
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
        <Component7Variant2
          swap={{
            vector: <VectorIcon2 className={classes.icon2} />,
          }}
        />
        <Component7Variant3
          className={classes.component7Variant3}
          swap={{
            vector: <VectorIcon3 className={classes.icon3} />,
          }}
        />
        <Component7Variant3
          className={classes.component7Variant32}
          swap={{
            vector: <VectorIcon4 className={classes.icon4} />,
          }}
        />
        <Component7Variant3
          className={classes.component7Variant33}
          swap={{
            vector: <VectorIcon5 className={classes.icon5} />,
          }}
        />
      </div>
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.ellipse3__icon6} />
      </div>
      <div className={classes.root__rectangle32}>
        <Rectangle32Icon className={classes.root__rectangle32__icon7} />
      </div>
      <div className={classes.root__rectangle33}>
        <Rectangle33Icon className={classes.root__rectangle33__icon8} />
      </div>
      <div className={classes.root__passingYrds}>Passing yrds</div>
      <div className={classes.root__passingTds}>Passing Tds</div>
      <div className={classes.root__rectangle34}>
        <Rectangle34Icon className={classes.root__rectangle34__icon9} />
      </div>
      <div className={classes.root__rectangle35}>
        <Rectangle35Icon className={classes.root__rectangle35__icon10} />
      </div>
      <div className={classes.root__rectangle36}>
        <Rectangle36Icon className={classes.root__rectangle36__icon11} />
      </div>
      <div className={classes.root__rectangle37}>
        <Rectangle37Icon className={classes.root__rectangle37__icon12} />
      </div>
      <div className={classes.root__rushingYrds}>Rushing yrds</div>
      <div className={classes.root__rushingTds}>Rushing Tds</div>
      <div className={classes.root__recevingYrds}>Receving yrds</div>
      <div className={classes.root__receptionTds}>Reception tds</div>
      <div className={classes.root__rectangle38}>
        <Rectangle38Icon className={classes.root__rectangle38__icon13} />
      </div>
      <div className={classes.root__rectangle39}>
        <Rectangle39Icon className={classes.root__rectangle39__icon14} />
      </div>
      <div className={classes.root__rectangle40}>
        <Rectangle40Icon className={classes.root__rectangle40__icon15} />
      </div>
      <div className={classes.root__rectangle41}>
        <Rectangle41Icon className={classes.root__rectangle41__icon16} />
      </div>
      <div className={classes.root__rectangle42}>
        <Rectangle42Icon className={classes.root__rectangle42__icon17} />
      </div>
      <div className={classes.root__rectangle43}>
        <Rectangle43Icon className={classes.root__rectangle43__icon18} />
      </div>
      <div className={classes.root__receptions}>Receptions</div>
      <div className={classes.root__interceptions}>Interceptions</div>
      <div className={classes.root__sacks}>Sacks</div>
      <div className={classes.root__passAttempts}>Pass Attempts</div>
      <div className={classes.root__rushingAttempts}>Rushing Attempts</div>
      <div className={classes.root__tackles}>Tackles</div>
      <div className={classes.gamesAndTimes}>
        <div className={classes.gamesAndTimes__frame26}>
          <div className={classes.gamesAndTimes__frame26__rectangle28}></div>
          <div className={classes.gamesAndTimes__frame26__mINVCHI}>MIN V CHI</div>
          <div className={classes.gamesAndTimes__frame26__rectangle282}></div>
          <div className={classes.gamesAndTimes__frame26__frame4}></div>
          <div className={classes.gamesAndTimes__frame26__sun10pm}>Sun 1:00pm </div>
          <div className={classes.gamesAndTimes__frame26__lAVSE}>LA V SE</div>
          <div className={classes.gamesAndTimes__frame26__rectangle283}></div>
          <div className={classes.gamesAndTimes__frame26__frame42}></div>
          <div className={classes.gamesAndTimes__frame26__sun10pm2}>Sun 1:00pm </div>
          <div className={classes.gamesAndTimes__frame26__lAVSE2}>LA V SE</div>
          <div className={classes.gamesAndTimes__frame26__rectangle284}></div>
          <div className={classes.gamesAndTimes__frame26__nYGVDAL}>NYG V DAL</div>
          <div className={classes.gamesAndTimes__frame26__rectangle285}></div>
          <div className={classes.gamesAndTimes__frame26__nEVNYJ}>NE V NYJ</div>
          <div className={classes.gamesAndTimes__frame26__mon830pm}>Mon 8:30pm </div>
          <div className={classes.gamesAndTimes__frame26__sun10pm3}>Sun 1:00pm </div>
          <div className={classes.gamesAndTimes__frame26__sun10pm4}>Sun 1:00pm </div>
        </div>
      </div>
      <div className={classes.nFLTrends}>NFL Trends</div>
      <div className={classes.frame7}>
        <Frame7Icon className={classes.frame7__icon19} />
      </div>
    </div>
  );
});
