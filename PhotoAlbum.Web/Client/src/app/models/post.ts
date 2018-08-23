import { PagingParameter } from "./parameters";
import { Like } from "./like";
import { TagPlain } from "./tag";

export interface ImagePost {
    Image: ImagePlain,
    Tags: TagPlain[],
    Likes: Like[],
}


export interface ImagePlain {
    Id: number;
    Created: Date;
    Description: string;
    NumberOfLikes: number;
    ImageName: string;
    LocalPath: string;

    UserId: string;
    UserName: string;
    UserAvalarUrl: string;

    IsLiked:boolean;

}



export interface Post {
    Images: ImagePost[];
    PageParameters: PagingParameter;
}

export interface TagPage {
    Tag: TagPlain;
    Images: ImagePost[];
}
