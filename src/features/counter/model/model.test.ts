import { Story } from 'foldkit';
import { describe, expect, it } from 'vitest';

import { Incremented } from './messages';
import { update } from './model';

describe('counter model', () => {
  it('increments count after receiving Incremented message', () => {
    Story.story(
      update,
      Story.with({ count: 5 }),
      Story.message(Incremented()),
      Story.model((model) => {
        expect(model.count).toBe(6);
      }),
    );
  });
});
