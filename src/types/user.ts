import { base } from './base';

export type user = base & {
  address: string;
  data: {
    role: string;
  };
};

export type users = base & {
  data: [
    {
      address: string;
      seedTokenAmount: number;
      privateTokenAmount: number;
      publicTokenAmount: number;
    },
  ];
};
