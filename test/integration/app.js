describe('Routes Books', () => {
  const defaultBook = {
    id: 1,
    name: 'Default Book'
  }

  describe('Route GET /books', () => {
    it('should return a list of books', done => {
      request.get('/books')
        .end((err, res) => {
          expect(res.body[0].id).to.equal(defaultBook.id)
          expect(res.body[0].name).to.equal(defaultBook.name)

          done(err)
        })
    })
  })
})
