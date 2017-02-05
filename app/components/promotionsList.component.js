const template = `<product-item ng-repeat="product in $ctrl.products" item="product"></product-item>`

export const name = 'promotionsList'
export const properties = {
  template,
  bindings: {
    products: '<items'
  }
}
