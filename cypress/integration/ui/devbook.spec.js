describe('Devbook application', () => {

    it('Visita a página inicial da aplicação', () => {
        cy.visit('http://localhost:3000')
        cy.get('h2[data-test="heading"]').contains('DevBook')
    })

    it('Apresenta lista de livros', () => {
        cy.visit('http://localhost:3000')
        cy.get('div[data-test="book-list"]').should('exist')
        // cy.get('div.book-item').should('have.length', 2) //Irá buscar uma div com a classe "book-item" e checar se possui largura de 2

        cy.get('div.book-item').should((books) => { //should está retornando um array de divs.

            expect(books).to.have.length(2); //Outra forma de testar 

            const titles = [...books].map(book => { //Desestrutura o que há dentro de books e o mapeia

                console.log(book)

                return book.querySelector('h5').innerHTML
            })

            expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design'])
        })

        
    })
})