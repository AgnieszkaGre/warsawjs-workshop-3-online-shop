import ApplicationController from './application.controller'
import {moduleName as componentsModuleName} from './components/components.module'
import {moduleName as servicesModuleName} from './services/services.module'

export const moduleName = 'shop'

angular.module(moduleName, [componentsModuleName, servicesModuleName])
    .controller('ApplicationController', ApplicationController)
