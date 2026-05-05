import { Runtime } from 'foldkit';

import { homeView } from '@pages/home';

import { triggerApplicationStarted } from './model/commands';
import { Message } from './model/messages';
import { DEFAULT_MODEL, Model, update } from './model/model';

export const init: Runtime.ProgramInit<Model, Message> = () => [
  DEFAULT_MODEL,
  [triggerApplicationStarted],
];

const ROOT_ID = '#root';
const root = document.querySelector(ROOT_ID);

if (!root) {
  throw new Error(`Missing root element with id: ${ROOT_ID}`);
}

const program = Runtime.makeProgram({
  Model,
  init,
  update,
  view: homeView,
  container: document.querySelector('#root')!,
  devTools: {
    Message,
  },
});

Runtime.run(program);
