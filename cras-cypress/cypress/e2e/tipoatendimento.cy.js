describe('Tipo de atendimento', () => {
  beforeEach(() => {
    cy.visit("https://front-cras.app.fslab.dev")

    cy.get(`#email`).type("adelson.moreira7293298820@gmail.com");
    cy.get("#senha").type("123");
    cy.get(`.styles_button__dr0t2`).click();

  })

  it("Deve cadastrar tipo de atendimento com todos os campos preechidos", () => {

  })


})