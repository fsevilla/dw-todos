describe('Login tests', () => {
  it('Should fail to log in', () => {
    cy.visit('/')
    cy.get('input[name="email"]').type('correo@correo.com')
    cy.get('input[name="pwd"]').type('Hola123')
    cy.get('#submit').click();
    cy.contains('El usuario/contraseña es incorrecto');
  });

  it('Should log in', () => {
    cy.visit('/')
    cy.get('input[name="email"]').type('dw@curso.com')
    cy.get('input[name="pwd"]').type('Hola1234')
    cy.get('#submit').click();
    cy.contains('Todos');
  });
})
