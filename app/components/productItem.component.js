const template = `
<div>
  <h2>{{ $ctrl.product.name }}</h2>
  <p>for only {{ $ctrl.product.price }}</p>
  <p>{{ $ctrl.product.description }}</p>
  <p>Add to cart</p>
  <count-picker on-pick="$ctrl.countPicked(count)"></count-picker>
</div>`

class ProductItemController {
  countPicked(count) {
    this.addToCart({amount: count})
  }
}

export const name = 'productItem'
export const properties = {
  template,
  bindings: {
    product: '<item',
    addToCart: '&onAddToCart'
  },
  controller: ProductItemController
}