import { Effect } from 'effect';
import { Command } from 'foldkit';

import { ApplicationStarted } from './messages';

const TriggerApplicationStarted = Command.define(
  'TriggerApplicationStarted',
  ApplicationStarted,
);
export const triggerApplicationStarted = TriggerApplicationStarted(
  Effect.succeed(ApplicationStarted()),
);
