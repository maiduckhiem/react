import api from "./api";

export const getAllcategory = () => {
  const url = "/category";
  return api.get(url);
};
export const Delete = (id) => {
  const url = "/category/" + id;
  return api.delete(url);
};
export const Add = (category) => {
  const url = "/category";
  return api.post(url, category);
};
export const Read = (id) => {
  const url = "/category/" + id;
  return api.get(url);
};
export const Update = (category) => {
  const url = "/category/" + category.id;
  return api.put(url, category);
};
