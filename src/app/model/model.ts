import { Match, Schema } from 'effect';
import { Command } from 'foldkit';
import { evo } from 'foldkit/struct';

import * as Counter from '@features/counter';

import { Message } from './messages';

export const Model = Schema.Struct({
  counter: Counter.Model,
});
export type Model = typeof Model.Type;
export const DEFAULT_MODEL: Model = {
  counter: Counter.DEFAULT_MODEL,
};

export const update = (
  model: Model,
  message: Message,
): readonly [Model, readonly Command.Command<Message>[]] =>
  Match.value(message).pipe(
    Match.withReturnType<
      readonly [Model, readonly Command.Command<Message>[]]
    >(),
    Match.tagsExhaustive({
      Incremented: (message) => {
        const [nextCounter, commands] = Counter.update(model.counter, message);
        return [evo(model, { counter: () => nextCounter }), commands];
      },
      ApplicationStarted: () => [model, []],
    }),
  );
