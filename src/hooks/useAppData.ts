import axios from 'axios';
import { useQuery } from 'react-query';

const baseUrl = `https://my-json-server.typicode.com/devschapy/json-server`
export const useGetData = (key) => {
   const result = useQuery(key, () => axios.get(`${baseUrl}/todos`));
   return result;
}

export const usePostData = (key, payload) => {
   const result = useQuery(key, () => axios.post('https://jsonplaceholder.typicode.com/posts',
      payload
   ));
   return result;
}

export const useDeleteData = (key, id) => {
   const result = useQuery(key, () => axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`));
   console.log(result)
   return result;
} 