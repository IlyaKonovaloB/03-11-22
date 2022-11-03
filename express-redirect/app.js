const express = require('express')
const app = express()

app.use('/index', function (request, response) {
  response.redirect('https://xsltdev.ru')
})
app.use('/home/bar', function (request, response) {
    response.redirect('about')
  })
  app.use('/home/about', function (request, response) {
    response.send('<h1>About</h1>')
  })
  app.use('/home/foo/bar', function (request, response) {
    response.redirect('..')
  })
  
app.listen(3000)