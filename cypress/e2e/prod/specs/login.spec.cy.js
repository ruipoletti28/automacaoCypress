const login = require("../../../fixtures/login.json")
describe('Página de login', () => {
    context('Perfil administrador', () => {
        it('Logar com dados válidos', () => {
            cy.loginProd(Cypress.env('loginADM'))

            cy.window().then(newWindow => {
                newWindow.location.href = '/NewSadTISS'
                cy.validatingLoginProd(Cypress.env('loginADM'), login.unity.unity3, login.localType.local2)
            })
        })
    })

})