class ShopCartController {
  constructor(){
    
  }
}


const template = `
<div>
Shop cart
<p ng-repeat="product in $ctrl.products">{{ product.name }} - {{ product.amount }}</p>
</div>`

export const name = 'shopCart'
export const properties = {
  template,
  bindings: {
    products: '<items'
  },
  controller: ShopCartController
}
