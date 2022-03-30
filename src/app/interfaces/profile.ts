import { Tweet } from "./tweet";

export interface Profile {
    id: number,
    profilelogo: string,
    username: string,
    profilename: string,
    profiledetails: string,
    profilecoverimage: string,
    followers: number,
    following: number,
    tweet: Tweet[],
    likedtweet: any[],
    retweetedtweet: any[],
    messages: string
}