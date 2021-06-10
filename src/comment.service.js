import http from "./api";

class AuthoDataService {
  getAll() {
    return http.get("/getallauthorcomments");
  }

  get(id) {
    return http.get(`/getauthorcomment/${id}`);
  }

  create(data) {
    return http.post("/postauthorcomment", data);
  }

  update(id, data) {
    return http.put(`/updateauthorcomment/${id}`, data);
  }

  delete(id) {
    return http.delete(`/deleteauthorcomment/${id}`);
  }
}

export default new AuthoDataService();