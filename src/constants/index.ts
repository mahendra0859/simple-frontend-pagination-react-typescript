export interface IAxiosResp {
    data: Array<IPost>
    config: Object;
    headers: Object;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
}
export interface IPost {
    body: string;
    id: number;
    title: string;
    userId: number;
}