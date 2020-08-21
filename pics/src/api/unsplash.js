import axios from 'axios';
import UNSPLASH_ACCESS_KEY from "../components/Conf";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY
    }
});