const express = require('express')
const bodyParser = require('body-parser')

const Datastore = require('@google-cloud/datastore')

const datastore = new Datastore()

const emailRegex = /^[^@]+@[^\.]+\..+$/

const app = express()
  .get(['/', '/_ah/health'], (req, res) => res.sendStatus(200))
  .post('/email', bodyParser.json(), (req, res, next) => {
    if (!emailRegex.test(req.body.email)) {
      const error = new Error('invalid email address')
      error.status = 400
      next(error)
      return
    }

    datastore
      .save({key: datastore.key(['Email', req.body.email])})
      .then(() => res.sendStatus(200))
      .catch(next)
  })
  .use((req, res) => res.sendStatus(404))
  .use((err, req, res, next) =>
    res.status(err.status || 500).send(err.message || 'Server Error'),
  )

const server = app.listen(process.env.PORT || 8080, () =>
  console.log(`listening on http://localhost:${server.address().port}`),
)
