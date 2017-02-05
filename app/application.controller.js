export default class ApplicationController {
  constructor(productsService) {
    this.productsService = productsService;
    this.inCartProducts = []
  }
  $onInit() {
    this.productsService.loadProducts()
  }

  get products() {
    return this.productsService.products
  }

  addProductToCart(product, amount) {
    const isInCart = this.inCartProducts.find(function(element) {
      return element.name == product.name;
    })
    if (!isInCart) {
      product.amount = amount;
      this.inCartProducts.push(product)
    } else {
      isInCart.amount += amount;
    }
    console.log("product: " , product, "amount: ", amount, "cart: ", this.inCartProducts )
  }
  removeProductFromCart(product, amount) {
    //TODO
  }

}
