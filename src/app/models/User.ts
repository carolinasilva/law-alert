export interface User {
    key: string,
    name?: string;
    email: string;
    picture?: string;
    premiumAccount: boolean;
    admin: boolean;
    tel?: string;
  }