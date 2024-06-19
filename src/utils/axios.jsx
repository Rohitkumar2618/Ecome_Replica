import axios from "axios";

const instance = axios.create({
  baasURL: "http://fakestoreapi.com/",
});

export default instance;
