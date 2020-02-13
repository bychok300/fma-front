import axios from 'axios';
import {ALL_POSTS, BASE_URL, CREATE_POST} from "../config/urls";

class NetworkRequestsService {
    request = axios.create({
        baseURL: BASE_URL,
        timeout: 10000,
    });

    responseParser = (response) => {
        const {data} = response;
        return data;
    };

    getAllPosts = (body) => this.request.post(ALL_POSTS, body).then(this.responseParser);

    createPost = (body) => this.request.post(CREATE_POST, body).then(this.responseParser);
}


export default new NetworkRequestsService();