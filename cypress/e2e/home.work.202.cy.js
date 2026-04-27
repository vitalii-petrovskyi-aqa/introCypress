describe('API Tests - Part 2', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'

  it('Getting a resource', () => {
    cy.request(`${baseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property("id", 1)
    })
  })

  it('Listing all resources', () => {
    cy.request(`${baseUrl}/posts`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
    })
  })

  it('Creating a resource', () => {
    cy.fixture('posts.json').then((posts) => {
      cy.request('POST', `${baseUrl}/posts`, posts.creatingResource).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('id')
        expect(response.body).to.include(posts.creatingResource)
      })
    })
  })

  it('Updating a resource', () => {
    cy.fixture('posts.json').then((posts) => {
      cy.request('PUT', `${baseUrl}/posts/8`, posts.updatedPost).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.equal(posts.updatedPost)
      })
    })
  })

  it('Deleting a resource', () => {
    cy.request('DELETE', `${baseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.empty
    })
  })

})