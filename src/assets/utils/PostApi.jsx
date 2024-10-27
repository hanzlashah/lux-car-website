import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

//get method
export const getPost = () => {
  return api.get("/posts");
};

// //post method
// export const postProduct = (data) => {
//     return api.post("/delete/post", {data});
//   };
