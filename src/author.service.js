import http from "./api";

class AuthoDataService {
  getAll() {
    return http.get("/getallauthor");
  }

  get(id) {
    return http.get(`/getauthor/${id}`);
  }

  create(data) {
    return http.post("/postauthor", data);
  }

  update(id, data) {
    return http.put(`/updateauthor/${id}`, data);
  }

  delete(id) {
    return http.delete(`/deleteauthor/${id}`);
  }
}

export default new AuthoDataService();