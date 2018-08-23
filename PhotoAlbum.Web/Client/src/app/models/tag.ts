import { ImagePost } from './post';

export interface TagPlain {
  Id: number;
  Description: string;
  ImagesCount: number;
}

export interface TagPage {
  Tag: TagPlain;
  Images: ImagePost[];
}
