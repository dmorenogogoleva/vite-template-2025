import axios, { AxiosResponse } from 'axios';
import { Breed, TPollJob } from "./types.ts";
import { getAllBreedsMapper } from "./mappers/get-all-breeds-mapper.ts";

const api = 'https://vibe-code-reviewing.labs.jb.gg'


export const completeReview = ({ comment, jobId, state }: {
  comment: string,
  state: 'approved' | 'rejected',
  jobId: string
}) => {
  const data = {
    comment,
    state,
  };

  return axios.post(`${api}/api/v1/complete-review/${jobId}`, data)
    .then((response: AxiosResponse) => {
      console.log('response completeReview', response);
    })
    .catch((error) => {
      console.error(error);
    });
};


export const sendComment = async ({ comment, commentType, commentPosition, chunkCommentId, jobId, filename }: any) => {
  console.log('sendComment', comment, commentType, commentPosition, jobId)

  const data = {
    comment,
    commentType,
    commentPosition,
    chunkCommentId,
    filename
  };

  return axios.post(`${api}/api/v1/send-comment/${jobId}`, data)
    .then((response: AxiosResponse) => {
      console.log('response sendComment', response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const pollJob = (id: string): Promise<TPollJob> => axios.get(`${api}/api/v1/poll-job/${id} `)
  .then(function (response: AxiosResponse) {
    console.log('response pollJob', response);
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })


export const startReview = (id: string) => axios.get(`${api}/api/v1/start-review/${id} `)
  .then(function (response: AxiosResponse) {
    console.log('response startReview', response);
    return response.data.job_id;
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })

export const checkAuth = (): any => axios.get(`${api}/api/v1/check-auth`)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })


export const getPrList = (): any => axios.get(`${api}/api/v1/get-pr-list`, { withCredentials: true })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })

// todo: remove
export const getChunks = (): any => axios.get(`${api}/chunks `)
  .then(function (response) {
    return getAllBreedsMapper(response.data);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })


export const getAllBreeds = (): Breed[] | any => axios.get(`${api}breeds/list/all `)
  .then(function (response) {
    return getAllBreedsMapper(response.data);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })

export const getImageByBreed = (breed: string) => axios.get(`${api}breed/${breed}/images `)
  .then(function (response) {
    return response.data.message;
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })
export const getRandomImage = () => {
  axios.get(`${api}/breeds/image/random `)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}