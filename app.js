const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<div>Platform Team Gazua</div>')
  res.write(`<div>My name is ${process.env.MY_NAME}</div>`)
  res.end()
})

app.listen(8080, () => {
  console.log('server is listening on port 8080');
})  