export class CommonElement {
  constructor(element){
    this.element = cy.get(element)
  }
  isVisible(){
    this.element.should('be.visible')
    return this
  }
  clickElement(){
    this.element.click()
    return this
  }
  clickElementForce(){
    this.element.click({ force: true })
    return this
  }
  clickElementMultiple() {
    cy.get(this.element).click({ multiple: true });
  }
  verifyIsDisabled(){
    this.element.should('be.disabled')
    return this
  }
  verifyIsNotDisabled(){
    this.element.should('not.be.disabled')
    return this
  }
  enterValue(value){
    this.element.clear().type(value, { sensitive: true })
    return this
  }
  enterClear(value){
    this.element.clear()
    return this
  }
  removeFocus(value){
    this.element.blur()
    return this
  }
  chekingText(value){
    this.element.should('have.text', value)
    return this
  }
  checkElementAbsence(value){
    this.element.should('not.exist')
    return this
  }
  firstFocus(value){
    this.element.first().focus()
    return this
  }

  borderColor(value){
    this.element.should('have.css', 'border-color', 'rgb(92, 179, 253)')
    return this
  }
  borderColorErrore(value){
    this.element.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    return this
  }
  select(value){
    this.element.select(value)
    return this
  }

}