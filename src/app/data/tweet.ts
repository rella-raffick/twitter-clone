export interface Tweet{
    tweetid: number,
    tweetcontent: string,
    media: string[],
    date: string,
    time: string,
    reply: number,
    retweet: number,
    likes: number
}