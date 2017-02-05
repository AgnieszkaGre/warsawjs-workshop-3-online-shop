export class ProductsService {
  constructor($http) {
    this.http = $http;
    this.productsStore = {
      normal: [],
      promoted: []
    };
  }
  get products() {
    return this.productsStore.normal;
  }
  get promotedProducts() {
    return this.productsStore.promoted;
  }
  loadProducts() {
    this.http.get('http://127.0.0.1:8001/products')
    .then(response => response.data)
    .then(products => {
      this.productsStore.normal = products
    })
  }
}
