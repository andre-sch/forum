import { ICategory } from "./category";

export interface IPost {
  id: string;
  author: string;
  title: string;
  content: string;
  categories: ICategory[];
  upVotes: string[];
  downVotes: string[];
  createdAt: Date;
  lastUpdate: Date;
}