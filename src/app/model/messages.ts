import { Schema } from 'effect';
import { m } from 'foldkit/message';

import * as Counter from '@features/counter';

export const ApplicationStarted = m('ApplicationStarted');

export const Message = Schema.Union([Counter.Message, ApplicationStarted]);
export type Message = typeof Message.Type;
