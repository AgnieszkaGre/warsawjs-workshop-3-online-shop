const template = `
<main>
  <div ng-transclude></div>
</main>`

export const name = 'pageContent'
export const properties = {
  template,
  transclude: true
}
