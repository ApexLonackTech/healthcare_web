import { AuthContext } from "../../../context/auth/ApiContext";


const fetcher = (url) => 
  fetch(process.env.API_URL + url).then((res) => res.json());


export { fetcher };
