import { ImagePost } from "./post";

export interface UserProfile {
    User: UserPlain,
    Images: ImagePost[],

    IsOwnProfile:boolean;
}

export interface UserPlain {
    Id: string,
    Username: string,
    Description: string,
    AvatarUrl: string,
    Fullname: string,
    Publications: number
}