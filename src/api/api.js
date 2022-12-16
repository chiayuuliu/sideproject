import axios from "axios";
import { getAuthorizationHeader } from "./headerFunc";

export default axios.create({
  baseURL: "https://tdx.transportdata.tw/api/basic",
  headers: getAuthorizationHeader()
});
// export default axios.create({
//   baseURL: "https://tdx.transportdata.tw/api/basic",
// });