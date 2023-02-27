import { base } from './base';

export type request = {
  address: string;
  name: string;
};

export type requests = base & {
  data: request[];
};
