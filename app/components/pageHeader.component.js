const template = `
<header>
  <div>
    <shop-logo size="medium"></shop-logo>
    <div ng-transclude="controls"></div>
  </div>
  <div ng-transclude="bar"></div>
</header>`

export const name = 'pageHeader'
export const properties = {
  template, // equivalent od `template: template`
  transclude: {
    controls: 'pageHeaderControls',
    bar: 'pageHeaderBar'
  }
}
