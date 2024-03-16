const dateParseUtils = require("../../support/utils/DateParseUtils")
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand()

Cypress.Commands.add('login', (login, profile, unityId, local) => {
    cy.visit('/')
    cy.get('#User').type(login.user)
    cy.get('#Senha').type(login.password, { log: false })
    cy.get('.btn.btn-primary').click()

    cy.get('body').then(($el) => {
        if ($el.find('.btn-Atualizar').length > 0) {
            cy.log("Elemento encontrado, clicando nele")
            cy.get('.btn-Atualizar').click()
        } else {
            cy.log("Elemento não encontrado, prosseguindo para o próximo passo")
        }
    })

    cy.get('body').then(($el) => {
        if ($el.find('[href="../NewPep/WPEP0030"]').length > 0) {
            cy.log("Elemento encontrado, clicando nele")
            cy.contains('a', 'RES-Consultório').click()
            cy.window().then(newWindow => {
                newWindow.location.href = '/NewPep/WPEP0030'
                cy.get('#IdInstal').wait(10000).select(unityId)
                cy.get('#ddlSalaAtend').select('NÃO USO PAINEL - NÃO USO PAINEL')

                if (profile === 'doctor') {
                    cy.get('#IndValidaMicro').check()
                }

                cy.get('#btnSalvar').click()


                cy.get('.sidebarCaller > .fa').click()
                cy.get('div').should('contain', login.name)
            })

        } else {
            cy.log("Elemento não encontrado, prosseguindo para o próximo passo")
            cy.get('#IdInstal').select(unityId)
            cy.get('#IdLocalAtend').select(local)

            if (profile === 'doctor') {
                cy.get('#IndValidaMicro').check()
            }

            cy.get('#btnSalvar').click()
            cy.get('.sidebarCaller > .fa').click()
            cy.get('.avatar > :nth-child(1) > a').should('contain', login.name)

        }
    })

})

