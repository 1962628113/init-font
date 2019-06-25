import axios from "axios";
const axio = axios.create({
  timeout: 10 * 1000
});
export default axio;
