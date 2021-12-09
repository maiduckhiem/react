import api from "./api";

export const getAllintroduce = () => {
  const url = "/introduce";
  return api.get(url);
}
export const DElete = (id) => {
  const url = "/introduce/" + id;
  return api.delete(url);
}
export const aDD = (introduce) => {
  const url = "/introduce";
  return api.post(url, introduce);
}
export const read = (id) => {
  const url = "/introduce/" + id;
  return api.get(url);
}
export const UPdate = (introduce) => {
  const url = "/introduce/" + introduce.id;
  return api.put(url, introduce);
}