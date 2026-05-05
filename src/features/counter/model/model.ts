import { Match, Schema } from 'effect';
import { Command } from 'foldkit';
import { evo } from 'foldkit/struct';

import { Message } from './messages';

export const Model = Schema.Struct({
  count: Schema.Number,
});
export type Model = typeof Model.Type;

export const DEFAULT_MODEL: Model = {
  count: 0,
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
      Incremented: () => [evo(model, { count: (count) => count + 1 }), []],
    }),
  );
