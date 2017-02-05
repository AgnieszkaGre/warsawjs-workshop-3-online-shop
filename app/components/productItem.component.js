class ProductItemController {
  constructor() {
    this.count = 0;
  }
  countPicked() {
    this.addToCart({amount: this.count})
    console.log(this.count)
    this.count = 0;
  }
}

const template = `
  <h2>{{ $ctrl.product.name | uppercase }}</h2>
  <p>for {{ $ctrl.product.price | currency:'PLN' }}</p>
  <p>{{ $ctrl.product.description }}</p>
  <p>Add to Cart </p>
  <form name=itemForm>
    <input type="number" name="amount" min="1" max="10" ng-model="$ctrl.count"/>
    <button ng-disabled="itemForm.$invalid" ng-click="$ctrl.countPicked()">Add</button>
  </form>
`

export const name = "productItem";
export const properties = {
  template,
  bindings: {
    product: '<item',
    addToCart: '&onAddToCart'
  },
  controller: ProductItemController
}
