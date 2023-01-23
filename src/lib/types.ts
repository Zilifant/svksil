// types

export type Theme = string | null;
export type Animation = string;

export type Quote = {
  text: string;
  author: string;
  url: string;
};

export type PageId = string;

export type Page = {
  id: PageId;
  color: string;
  pos: number;
};
