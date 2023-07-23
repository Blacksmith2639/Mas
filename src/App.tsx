import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.scss';
import resets from './components/_resets.module.scss';
import { IPhone14ProMax3 } from './components/IPhone14ProMax3/IPhone14ProMax3';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <IPhone14ProMax3 />
    </div>
  );
});
