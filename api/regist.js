import request from "./request";

export const fetchReg = () => 
    request
      .post(`/user/post`)
      .then(res => res.data)
      .catch(err => {
        console.log(err)
      })