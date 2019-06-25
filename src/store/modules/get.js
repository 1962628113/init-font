import api from "./ajxios";
export const getproductApi = pageNum => {
  return api.get("/api/commodity/getAll?pageNum=" + pageNum);
};
export const loginApi = u => {
  console.log(u);
  return api.post("/api/user/login", u);
};
export const updateApi = commodity => {
  return api.post("/api/commodity/undate", commodity);
};
export const addApi = commodity => {
  return api.post("/api/commodity/add", commodity);
};
