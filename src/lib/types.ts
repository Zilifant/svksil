// types

import type { Document } from '@contentful/rich-text-types';

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

export type ContentfulData = {
  sys: any;
  items: any[];
  includes: any;
  total: number;
  limit: number;
  skip: number;
};

export type AssetRef = CfItem;

export type CfItem = {
  fields: any;
  metadata: any;
  sys: any;
};

export type MasterJSON = {
  id: 'web-all-content';
  bio: BioContent;
  code: CodeContent;
  resume: ResumeContent;
  writing: WritingContent;
  quotes: QuotesContent;
  socials: SocialsContent;
};

export type Partner = {
  id: string;
  alt: string;
};

export type BioContent = {
  partners: Partner[];
};

export type ResumeIntro = {
  headline: { general: string };
};

export type Endorsement = {
  name: string;
  title: string;
  quote: string;
  order: number;
};

export type School = {
  degreeShort: string;
  subject: string;
  nameLong: string;
  gradYear: number;
};

export type Skills = {
  categories: any[];
  skills: any[];
};

export type Experience = any;

export type Interests = {
  shortForm: string[];
  longForm: string[];
};

export type ResumeContent = {
  intro: ResumeIntro;
  endorsements: Endorsement[];
  education: School[];
  skills: Skills;
  experience: Experience[];
  interests: Interests;
};

export type CodeContent = any;

export type WritingContent = any;

export type BlogContent = {
  posts: BlogPost[];
  tags: string[];
};

export type BlogPost = {
  title: string;
  content: Document;
  contentHTML: string;
  tags: string[];
  date: string;
};

export type QuotesContent = {
  id: 'quotes';
  type: 'footer';
  quotes: Quote[];
};
export type SocialsContent = any;

export type AllContent = {
  id: 'web-all-content';
  bio: BioContent;
  resume: ResumeContent;
  code: CodeContent;
  writing: WritingContent;
  blog?: BlogContent;
  quotes: QuotesContent;
  socials: SocialsContent;
  contentfulData: ContentfulData;
  contentfulJSON: MasterJSON;
};

export type SVGsHTML = {
  plus: string;
  quote: string;
  github: string;
  npm: string;
  mhk: string;
  slogo: string;
};

export type ImageData = {
  url: string;
  title: string;
  alt: string;
  id?: string;
  order?: string | number;
  description?: string;
  tags?: string[];
  width?: number;
  height?: number;
};

export type AssetData = any;

export type ContentType = 'html' | 'htmlCodeSnippet' | 'imageSeries' | 'image';

export type SubSectionData = {
  contentType: ContentType;
  html?: string;
  image?: ImageData;
  imageSeries?: { uiComponent: string; data: ImageData[] };
};
