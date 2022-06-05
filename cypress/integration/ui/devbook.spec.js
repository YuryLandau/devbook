import { api } from '../../../src/services/api'

describe('Devbook application', () => {
    before(() => {
        return api.delete('books?_cleanup=true').catch((err) => (err))
    })

    beforeEach(() => {
        const books = [
            { 'name': 'Refactoring', 'id': 1},
            { 'name': 'Domain-driven design', 'id': 2},
            { 'name': 'Building Microservices', 'id': 3}
        ]

        return books.map(item => api.post('books', item, {
            headers: {'Content-Type': 'application/json'}
        }))
    })

    afterEach(() => { //
        return api.delete('books?_cleanup=true').catch((err) => (err))
    })

    it('Visita a página inicial da aplicação', () => {
        cy.visit('http://localhost:3000')
        cy.get('h2[data-test="heading"]').contains('DevBook')
    })

    it('Apresenta lista de livros', () => {
        cy.visit('http://localhost:3000')
        cy.get('div[data-test="book-list"]').should('exist')
        // cy.get('div.book-item').should('have.length', 2) //Irá buscar uma div com a classe "book-item" e checar se possui largura de 2

        cy.get('div.book-item').should((books) => { //should está retornando um array de divs.

            expect(books).to.have.length(3); //Outra forma de testar 

            const titles = [...books].map(book => { //Desestrutura o que há dentro de books e o mapeia

                console.log(book)

                return book.querySelector('h5').innerHTML
            })

            expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design', 'Building Microservices'])
        })

        
    })
})