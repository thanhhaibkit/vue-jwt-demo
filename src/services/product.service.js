import http from "../http-common";
import authHeader from './auth-header';

class ProductService {
  getAll() {
    return http.get("/products", { headers: authHeader() });
  }

  get(id) {
    return http.get(`/products/${id}`, { headers: authHeader() });
  }

  create(data) {
    return http.post("/products", data, { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/products/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/products/${id}`, { headers: authHeader() });
  }

  findByCode(code) {
    return http.get(`/products?code=${code}`, { headers: authHeader() });
  }
}

export default new ProductService();