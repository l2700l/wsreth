import { base } from './base';

export type balance = base & {
  data: {
    tokenBalance: number;
    ethBalance: string;
  };
};
