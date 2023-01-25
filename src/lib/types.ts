// types

export type Theme = string | null;
export type Animation = 'fade' | 'flyLeft' | 'flyRight';
export type DropNavState = 'hidden' | 'visible';

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

export type BioContent = any;
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
