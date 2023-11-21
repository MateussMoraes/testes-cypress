describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })
  
  it("Deve realizar o login com sucesso", () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
  })

  it("Deve retornar mensagem dos campos obrigatórios", () => {
    cy.wait(2000);
    cy.get('.oxd-button').click();
    cy.contains("Required")
  })
})