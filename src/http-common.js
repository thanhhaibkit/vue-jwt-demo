import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:10000/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});