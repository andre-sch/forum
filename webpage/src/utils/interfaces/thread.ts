import { Timestamp } from "../types/timestamp";
import { ICategory } from "./category";
import { IComment } from "./comment";
import IUser from "./user";

export interface IThread {
  id: string;
  title: string;
  content: string;
  author: IUser;
  categories: ICategory[];
  upVotes: string[];
  downVotes: string[];
  createdAt: Timestamp;
  lastUpdate: Timestamp;
  comments: IComment[];
}