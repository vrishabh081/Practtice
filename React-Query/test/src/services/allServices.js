import axios from "axios";


// Fetch All Data-
export const fetchData = () => {
  return axios.get("http://localhost:8000/data?_page=0&_limit=15");
};

// Fetch Single Data-
export const fetchSingleData = (id) => {
    return axios.get(`http://localhost:8000/data/${id}`);
  };
  

  // Post Data-
export const postData = (body) => {
  return axios.post("http://localhost:8000/data", body);
};