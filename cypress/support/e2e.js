// Import commands.js using ES2015 syntax:
import './commands/commandsUI'
require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
