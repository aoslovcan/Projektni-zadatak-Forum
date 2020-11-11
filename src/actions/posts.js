import axios from 'axios'

export function getPosts(){

return axios.get("http://localhost:3001/posts")
    .then(res =>res.data)
   .catch((err) => {
    console.log(err)
  });

}


