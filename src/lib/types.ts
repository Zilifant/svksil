// types

export type Theme = string;
export type Animation = 'fade' | 'flyLeft' | 'flyRight';
export type DropNavState = 'hidden' | 'visible';

export type Quote = {
  text: string;
  author: string;
  url: string;
};

export type PageId = string | null;

export type Page = {
  id: PageId;
  href: string;
  color: string;
  pos: number;
};

export type Partner = {
  id: string;
  alt: string;
};

export type BioContent = {
  partners: Partner[];
};

export type ResumeContent = any;
export type CodeContent = any;
export type WritingContent = any;
export type QuotesContent = any;
export type SocialsContent = any;

export type AllContent = {
  id: 'web-all-content';
  bio: BioContent;
  resume: ResumeContent;
  code: CodeContent;
  writing: WritingContent;
  quotes: QuotesContent;
  socials: SocialsContent;
};

export type ContentfulData = {
  sys: any;
  total: number;
  skip: number;
  limit: number;
  items: any[];
};
