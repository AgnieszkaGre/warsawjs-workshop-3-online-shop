class ShopLogoController {
  constructor() {
    this.source = "https://raw.githubusercontent.com/mateuszkocz/warsawjs-workshop-3-online-shop/development/app/images/warsawjs-logo.png"
  }
  $onInit() {
    if (this.size == "small") this.width = "50px"
    else if (this.size == "medium") this.width = "100px"
  }
}

export const name = 'shopLogo'
export const properties = {
  template: `
  <img ng-src="{{ $ctrl.source }}" width="{{ $ctrl.width }}">`,
  controller: ShopLogoController,
  bindings: {
    size: '@'
  }
}
