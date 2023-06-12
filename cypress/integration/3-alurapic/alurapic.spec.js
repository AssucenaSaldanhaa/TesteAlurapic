describe('Login e registro e usiarios alura pic', () => {
  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com')
  })

  it('verifica mensagem validacao', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Registe').click()
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('button', 'Registe').click()
    cy.contains('ap-vmessage', 'Usuario  is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    cy.contains('ap-vmessage', ' name is required!').should('be.visible')
  })

  it('verifica mensagens de email invalido', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get('input[formcontrolname="email"]').type('jacqueline')
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
  })

  it('verifica mensagens de email invalido', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get('input[formcontrolname="password"]').type('123')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'length is 8').should('be.visible')
  })
})
