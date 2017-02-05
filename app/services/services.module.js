import {ProductsService} from './products.service'

export const moduleName = 'services'
angular.module(moduleName, [])
  .service('productsService', ProductsService)
