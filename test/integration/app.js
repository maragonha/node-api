describe('Routes Books', () => {
  const Books = app.datasource.models.Books,
    defaultBook = {
      id: 1,
      name: 'Default Book'
    }

  beforeEach(done => {
    Books.destroy({where: {}})
      .then(() => Books.create(defaultBook))
      .then(() => {
        done()
      })
  })

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
