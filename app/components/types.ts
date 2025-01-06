export interface Message {
    id: string;
    text: string;
    username: string;
    avatarUrl?: string;
    isVerified?: boolean;
  }