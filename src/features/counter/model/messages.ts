import { Schema } from 'effect';
import { m } from 'foldkit/message';

export const Incremented = m('Incremented');
export const Message = Schema.Union([Incremented]);
export type Message = typeof Message.Type;
