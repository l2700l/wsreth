import { base } from './base';

export type phase = base & {
  data: {
    phase: 'public' | 'private';
  };
};
