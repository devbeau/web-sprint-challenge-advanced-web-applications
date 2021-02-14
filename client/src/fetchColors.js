import axiosWithAuth from './axiosWithAuth';
import axios from 'axios'
export function fetchColors() {
    
    return axiosWithAuth().get('api/colors')
        .then(res => {
            return res;
        })
        .catch(err => console.log('fetchColors', err))
}

export function mockFetchColors() {
    const token =
  "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

    return axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
            authorization: token,
        },
    })
    .get('api/colors')
    .then(res => res)
    .catch(err => console.log('fetchColors', err));
}