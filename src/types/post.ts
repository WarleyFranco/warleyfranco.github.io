export interface Post {
  title: string;
  created: Date;
  categories: Array<string>;
  description: string;
  content: string;
  language: string;
  slug: string;
}
