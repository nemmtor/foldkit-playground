import { Html } from 'foldkit/html';

import { ClassValue, cn } from '@shared/ui';

import { Incremented } from '../model/messages';
import { Model } from '../model/model';
import { Class, OnClick, button, div, p } from './html';

export const counter = (model: Model, classes?: ClassValue): Html =>
  div(
    [Class(cn('p-4', classes))],
    [
      p([], ['This is counter feature']),
      button([OnClick(Incremented())], [`Click: ${model.count}`]),
    ],
  );
