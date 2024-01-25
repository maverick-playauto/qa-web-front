export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type SendUrl = (
  url: string,
  method: Method,
  data?: any,
  header?: any,
) => void;
