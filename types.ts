
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface BookInfo {
  title: string;
  authors: string[];
  contactEmail: string;
  links: {
    draft: string;
    proposal: string;
  };
  summary: string;
}

export enum AuthStatus {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED'
}
