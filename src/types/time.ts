import { base } from './base';

export type time = base & {
  data: {
    systemTime: number;
  };
};
