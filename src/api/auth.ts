import axios from "axios";

const api = 'https://vibe-code-reviewing.labs.jb.gg';
// todo: remove?
export const loginSpace = () => {
  axios.get(`${api}/api/v1/login/space`)
    .then(function (response) {
      console.log('response', response)
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.error(error);
    })
}
