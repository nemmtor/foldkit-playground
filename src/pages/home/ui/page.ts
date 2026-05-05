import { Document } from 'foldkit/html';

import * as Counter from '@features/counter';

import { Class, div } from '@shared/ui';

export const homeView = (models: { counter: Counter.Model }): Document => ({
  title: 'Hello world!',
  body: div(
    [
      Class(
        'p-4 min-h-screen bg-white flex flex-col items-center justify-center',
      ),
    ],
    [Counter.counter(models.counter, 'p-6 border-2')],
  ),
});
