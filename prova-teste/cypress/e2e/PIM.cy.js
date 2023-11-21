describe("Colaboradores", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
  })

  it("Deve cadastrar um funcionário com sucesso", () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click();

    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Mateus");
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("Moraes");
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("Silva");
    cy.get('.oxd-switch-input').click();
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("mateusmoraes12");
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("M@teus123");
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("M@teus123");

    cy.get('.oxd-button--secondary').click();

    cy.contains("Exito")
    cy.contains("Guardado correctamente")
  })

  it('Deve editar o sobrenome de um funcionário com sucesso', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click();
    cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click();

    cy.get(":nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)").click();
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("Moraes");

    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();

    cy.contains("Exito")
    cy.contains("Se ha actualizado correctamente")
  })

  it.only("Deve excluir um usuário com sucesso", () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click();

    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)').click();
    cy.get('.oxd-button--label-danger').click();

    cy.contains("Exito")
    cy.contains("Se ha eliminado correctamente")
  })
})