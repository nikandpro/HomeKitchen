import request from "./request";

export const fetchFood = () =>
  request
    .get(`/food/get`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchTag = () =>
  request
    .get(`/tag/get`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchIDFood = (id) =>
  request
    .get(`/food/get/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const fetchFoodForSubTag = (allSubtag) =>
  request
    .get(`/food/get`, {
      params: { subtag: allSubtag.toString() },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
